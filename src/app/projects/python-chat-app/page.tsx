import { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
    title: "Python Chat App",
    description:
        "Webpage detailing the functionality of J.L.'s Python Chat App.",
};

export default function PythonChatApp() {
    return (
        <div className="grid grid-cols-1 gap-1 p-[4rem] md:grid-cols-2"></div>
    );
}
