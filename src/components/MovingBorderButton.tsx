"use client";

import { useRef, useEffect, useCallback } from "react";
import type { ButtonHTMLAttributes } from "react";

const BORDER_RADIUS = 12;
const STROKE_SAMPLES = 28;
const CYCLE_MS = 3800;

// Phase boundaries (fraction of cycle)
const P1_END = 0.28; // travel to TR / BL
const P2_END = 0.43; // pause at corners
const P3_END = 0.73; // travel to BR
const P4_END = 0.82; // fade out at BR

const TAIL_RGB: [number, number, number] = [6, 78, 59]; // emerald-900
const HEAD_RGB: [number, number, number] = [34, 197, 94]; // green-500 (accent)
const STROKE_WIDTH = 1.5;
const MIN_ALPHA = 0.08;
const MAX_ALPHA = 0.5;
const GLOW_BLUR = 8;
const GLOW_RGB: [number, number, number] = [74, 222, 128]; // green-400

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// Path A: clockwise from TL apex → TR apex → BR apex
// All arc math uses rp = r - 1 so the 2px stroke sits on the border edge.
function pathAPoint(
  d: number,
  W: number,
  H: number,
  r: number
): [number, number] {
  const rp = r - 1;
  const PI = Math.PI;
  let rem = d;

  // 1. TL arc: from 225° advancing CW to 270° (top edge junction)
  const s1 = (rp * PI) / 4;
  if (rem <= s1) {
    const a = (5 * PI) / 4 + rem / rp;
    return [r + rp * Math.cos(a), r + rp * Math.sin(a)];
  }
  rem -= s1;

  // 2. Top edge
  const s2 = W - 2 * r;
  if (rem <= s2) return [r + rem, 1];
  rem -= s2;

  // 3. TR arc: 270° → 360° (right edge junction)
  const s3 = (rp * PI) / 2;
  if (rem <= s3) {
    const a = (3 * PI) / 2 + rem / rp;
    return [W - r + rp * Math.cos(a), r + rp * Math.sin(a)];
  }
  rem -= s3;

  // 4. Right edge
  const s4 = H - 2 * r;
  if (rem <= s4) return [W - 1, r + rem];
  rem -= s4;

  // 5. BR arc: 0° → 45° (BR apex)
  const a = rem / rp;
  return [W - r + rp * Math.cos(a), H - r + rp * Math.sin(a)];
}

// Path B: counter-clockwise from TL apex → BL apex → BR apex
function pathBPoint(
  d: number,
  W: number,
  H: number,
  r: number
): [number, number] {
  const rp = r - 1;
  const PI = Math.PI;
  let rem = d;

  // 1. TL arc: from 225° retreating CCW to 180° (left edge junction)
  const s1 = (rp * PI) / 4;
  if (rem <= s1) {
    const a = (5 * PI) / 4 - rem / rp;
    return [r + rp * Math.cos(a), r + rp * Math.sin(a)];
  }
  rem -= s1;

  // 2. Left edge
  const s2 = H - 2 * r;
  if (rem <= s2) return [1, r + rem];
  rem -= s2;

  // 3. BL arc: 180° → 90° CCW (bottom edge junction)
  const s3 = (rp * PI) / 2;
  if (rem <= s3) {
    const a = PI - rem / rp;
    return [r + rp * Math.cos(a), H - r + rp * Math.sin(a)];
  }
  rem -= s3;

  // 4. Bottom edge
  const s4 = W - 2 * r;
  if (rem <= s4) return [r + rem, H - 1];
  rem -= s4;

  // 5. BR arc: 90° → 45° CCW (BR apex)
  const a = PI / 2 - rem / rp;
  return [W - r + rp * Math.cos(a), H - r + rp * Math.sin(a)];
}

function drawStroke(
  ctx: CanvasRenderingContext2D,
  getPoint: (d: number) => [number, number],
  centerDist: number,
  strokeLen: number,
  pathLen: number,
  alpha: number
): void {
  const half = strokeLen / 2;
  const tailDist = Math.max(0, centerDist - half);
  const headDist = Math.min(pathLen, centerDist + half);
  const range = headDist - tailDist;
  if (range <= 0 || alpha <= 0) return;

  ctx.lineWidth = STROKE_WIDTH;
  ctx.lineCap = "round";

  for (let i = 0; i < STROKE_SAMPLES; i++) {
    const t0 = i / STROKE_SAMPLES;
    const t1 = (i + 1) / STROKE_SAMPLES;
    const [x0, y0] = getPoint(tailDist + t0 * range);
    const [x1, y1] = getPoint(tailDist + t1 * range);
    const mid = (t0 + t1) / 2;

    const cr = Math.round(lerp(TAIL_RGB[0], HEAD_RGB[0], mid));
    const cg = Math.round(lerp(TAIL_RGB[1], HEAD_RGB[1], mid));
    const cb = Math.round(lerp(TAIL_RGB[2], HEAD_RGB[2], mid));
    // Ramp alpha from MIN_ALPHA at tail to MAX_ALPHA at head so the whole worm
    // is visible but stays pale against the button background.
    const localAlpha = MIN_ALPHA + (MAX_ALPHA - MIN_ALPHA) * mid;
    const ca = alpha * localAlpha;

    // Canvas shadow gives a soft glow halo around the thin core stroke.
    // shadowColor's alpha controls glow intensity independently of the stroke.
    ctx.shadowColor = `rgba(${GLOW_RGB[0]},${GLOW_RGB[1]},${GLOW_RGB[2]},${(
      ca * 1.6
    ).toFixed(3)})`;
    ctx.shadowBlur = GLOW_BLUR;

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = `rgba(${cr},${cg},${cb},${ca.toFixed(3)})`;
    ctx.stroke();
  }

  // Reset shadow state so any later canvas operations don't inherit it.
  ctx.shadowBlur = 0;
}

export interface MovingBorderButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: number;
}

export function MovingBorderButton({
  children,
  className = "",
  borderRadius = BORDER_RADIUS,
  style,
  ...props
}: MovingBorderButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const t0Ref = useRef<number | undefined>(undefined);
  const dimsRef = useRef<{ W: number; H: number; dpr: number }>({
    W: 0,
    H: 0,
    dpr: 1,
  });

  const frame = useCallback(
    (ts: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (t0Ref.current === undefined) t0Ref.current = ts;
      const t = ((ts - t0Ref.current) % CYCLE_MS) / CYCLE_MS;

      const { W, H, dpr } = dimsRef.current;
      if (W <= 0 || H <= 0) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      const r = borderRadius;
      const rp = r - 1;
      const D = rp * Math.PI + (W + H - 4 * r);
      const strokeLen = H * 0.7;
      const dA1 = (rp * Math.PI) / 2 + (W - 2 * r);
      const dB1 = (rp * Math.PI) / 2 + (H - 2 * r);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      let pA = 0;
      let pB = 0;
      let alpha = 1;

      if (t < P1_END) {
        const p = easeInOut(t / P1_END);
        pA = p * dA1;
        pB = p * dB1;
      } else if (t < P2_END) {
        pA = dA1;
        pB = dB1;
      } else if (t < P3_END) {
        const p = easeInOut((t - P2_END) / (P3_END - P2_END));
        pA = dA1 + p * (D - dA1);
        pB = dB1 + p * (D - dB1);
      } else if (t < P4_END) {
        pA = D;
        pB = D;
        alpha = 1 - (t - P3_END) / (P4_END - P3_END);
      } else {
        alpha = 0;
      }

      if (alpha > 0) {
        drawStroke(ctx, (d) => pathAPoint(d, W, H, r), pA, strokeLen, D, alpha);
        drawStroke(ctx, (d) => pathBPoint(d, W, H, r), pB, strokeLen, D, alpha);
      }

      rafRef.current = requestAnimationFrame(frame);
    },
    [borderRadius]
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    // Initialize dimensions synchronously so the first RAF tick can draw.
    // ResizeObserver fires asynchronously; without this, the first 1-2
    // frames would see W=H=0 and return early, producing a brief flash of
    // no-stroke that some browsers never recover from until a paint trigger.
    const initRect = wrap.getBoundingClientRect();
    const initDpr = window.devicePixelRatio || 1;
    const initW = Math.round(initRect.width);
    const initH = Math.round(initRect.height);
    if (initW > 0 && initH > 0) {
      dimsRef.current = { W: initW, H: initH, dpr: initDpr };
      canvas.width = initW * initDpr;
      canvas.height = initH * initDpr;
      canvas.style.width = `${initW}px`;
      canvas.style.height = `${initH}px`;
    }

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        const W = Math.round(width);
        const H = Math.round(height);
        dimsRef.current = { W, H, dpr };
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
      }
    });

    ro.observe(wrap);
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [frame]);

  return (
    <div
      ref={wrapRef}
      className="relative inline-block"
      style={{ borderRadius, isolation: "isolate" }}
    >
      <button
        className={`relative cursor-pointer rounded-xl px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${className}`}
        style={{ ...style, zIndex: 0 }}
        {...props}
      >
        {children}
      </button>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ borderRadius, zIndex: 1 }}
      />
    </div>
  );
}
