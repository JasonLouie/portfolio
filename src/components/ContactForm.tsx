"use client";
import React from "react";
import Button from "./Button";
import Title from "./Title";
import { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
    const [submitState, disableSubmit] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxVEajjQFDeZGHlfFWvZ26yoMqPbrh-hXWmeKjF9YLMewtYoTpMpWDKvaPbZwQWwb-3/exec";

    const validate = (formData: FormData) => {
        let keyValuePairs = [];
        for (const [key, value] of Array.from(formData.entries())) {
            keyValuePairs.push(key + "=" + value);
        }
        return true;
    };

    const sendData = (formData: FormData) => {
        fetch(scriptURL, {
            redirect: "follow",
            method: "POST",
            mode: "cors",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    setModalOpen(true);
                } else {
                    console.error("Server error!", response.statusText);
                }
            })
            .catch((error) => console.error("Error!", error.message));
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        disableSubmit(true);
        const formData = new FormData(e.currentTarget);
        if (validate(formData)) {
            sendData(formData);
        }
        disableSubmit(false);
    }

    return (
        <>
            <form
                action=""
                className="flex flex-col items-start gap-5"
                name="contact-form"
                onSubmit={handleSubmit}
            >
                <Title>Get in Touch</Title>
                <label htmlFor="name" className="text-n-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    name="name"
                    className="input autofill"
                    required
                />
                <label htmlFor="email" className="text-n-2">
                    Email address
                </label>
                <input
                    type="text"
                    id="email"
                    autoComplete="email"
                    name="email"
                    className="input autofill"
                    required
                />
                <label htmlFor="message" className="text-n-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="bg-n-5 py-[.875rem] w-[25rem] h-[8.75rem] border-none outline-none pl-[1.5rem] rounded-[1.25rem] focus:ring-2 focus:ring-n-3"
                    required
                />
                <Button
                    id="submit"
                    buttonType="submit"
                    className="mt-4 inline-block py-2 bg-n-5 text-n-1 font-semibold rounded-md hover:bg-n-4 transition-colors duration-300 group-invalid:pointer-events-none group-invalid:opacity-30"
                    px="px-6"
                    disabled={submitState}
                >
                    Submit
                </Button>
            </form>
            <Modal
                title="Success!"
                message="Your message was sent successfully."
                isOpen={isModalOpen}
                onClose={() => {
                    setModalOpen(false);
                    window.location.reload(); // Reload the page on modal close
                }}
            />
        </>
    );
}
