import Button from "@/components/Button";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Reach out to J.L.",
};

export default function Contact(this: any) {
    return (
        <Section
            className="pt-[5rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="contact"
        >
            <div className="p-4 h-full flex items-center justify-evenly box-border">
                <form
                    action="https://script.google.com/macros/s/AKfycbzl1Lb1C286eARanO2zJKsO_4PH1u3vp5L7cWJ3row/dev"
                    method="post"
                    className="flex flex-col items-start gap-5"
                >
                    <div>
                        <h2 className="h2 mb-[0.5rem]">
                            Get in Touch{" "}
                            <hr className="border-none w-[55%] h-[0.25rem] bg-n-5 mb-[1.25rem]" />
                        </h2>
                    </div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        name="name"
                        className="input autofill"
                        required
                    />
                    <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        id="email"
                        autoComplete="email"
                        name="email"
                        className="input autofill"
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="bg-n-5 py-[.875rem] w-[25rem] h-[8.75rem] border-none outline-none pl-[1.5rem] rounded-[1.25rem] focus:ring-2 focus:ring-n-3"
                        required
                    />
                    <Button
                        buttonType="submit"
                        className="mt-4 inline-block py-2 bg-n-5 text-n-1 font-semibold rounded-md hover:bg-n-4 transition-colors duration-300 group-invalid:pointer-events-none group-invalid:opacity-30"
                        px="px-6"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Section>
    );
}
