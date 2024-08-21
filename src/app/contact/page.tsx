import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Reach out to J.L.",
};

export default function Contact() {
    return (
        <div className="p-4 h-full flex items-center justify-evenly box-border">
            <ContactForm />
        </div>
    );
}
