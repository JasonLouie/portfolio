import { IconType } from "react-icons";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { contacts } from "../constants";

const CONTACT_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  Gmail: SiGmail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/25 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Terminal-prompt signature */}
        <div className="text-center md:text-left">
          <p className="font-mono text-sm">
            <span className="text-accent">jason@portfolio</span>
            <span className="text-fg">:</span>
            <span className="text-muted">~</span>
            <span className="text-fg">$</span>{" "}
            <span className="text-fg">built &amp; designed by Jason Louie</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            © {year} · all rights reserved
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {contacts.map((contact) => {
            const Icon = CONTACT_ICONS[contact.tip];
            return (
              <a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.tip}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-fg/10 text-muted transition-colors hover:cursor-pointer hover:border-accent/50 hover:text-accent"
              >
                {Icon ? <Icon className="h-4 w-4" /> : contact.tip}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
