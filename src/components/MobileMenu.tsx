import menu from "../assets/menu.jpg";
import Image from "next/image";

export default function MobileMenu() {
    return (
        <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
                <Image
                    className="w-full h-full object-cover"
                    src={menu}
                    width={688}
                    height={953}
                    alt="Background"
                />
            </div>
        </div>
    );
}
