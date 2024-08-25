"use client";
import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Modal from "./Modal";
import { scriptURL } from "@/constants";

export default function ContactForm() {
    const initialValues = { name: "", email: "", message: "" };
    const formIds: string[] = [];

    const [submitState, disableSubmit] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const validate = (values: {
        name: string;
        email: string;
        message: string;
    }) => {
        const errors = { name: "", email: "", message: "" };
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.name) {
            errors.name = "Name is required!";
            formIds.push("nameError");
        } else {
            document.getElementById("nameError")?.classList.add("hidden");
        }
        if (!values.email) {
            errors.email = "Email is required!";
            formIds.push("emailError");
        } else if (!String(values.email).toLowerCase().match(regex)) {
            errors.email = "Invalid email format!";
            formIds.push("emailError");
        } else {
            document.getElementById("emailError")?.classList.add("hidden");
        }
        if (!values.message) {
            errors.message = "Message is required!";
            formIds.push("messageError");
        } else if (values.message.length < 10) {
            errors.message = "Message must be at least 10 characters!";
            formIds.push("messageError");
        } else {
            document.getElementById("messageError")?.classList.add("hidden");
        }
        return errors;
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
        setFormErrors(validate(formValues));
        if (formIds.length === 0) {
            // console.log("Before submit toggle: ", submitState);
            disableSubmit(true);
            // console.log("After submit toggle: ", submitState);
            sendData(new FormData(e.currentTarget));
            disableSubmit(false);
            // console.log("After submit toggle2: ", submitState);
        } else {
            // Display errors
            formIds.map((id: string) =>
                document.getElementById(id)?.classList.remove("hidden")
            );
        }
    }

    return (
        <>
            <form
                action=""
                className="flex flex-col items-start gap-5"
                name="contact-form"
                onSubmit={handleSubmit}
                noValidate
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
                    onChange={handleInput}
                    value={formValues.name}
                />
                <p id="nameError" className="error hidden">
                    {formErrors.name}
                </p>
                <label htmlFor="email" className="text-n-2">
                    Email address
                </label>
                <input
                    type="text"
                    id="email"
                    autoComplete="email"
                    name="email"
                    className="input autofill"
                    onChange={handleInput}
                    value={formValues.email}
                />
                <p id="emailError" className="error hidden">
                    {formErrors.email}
                </p>
                <label htmlFor="message" className="text-n-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="input h-[6rem] sm:h-[7.5rem] md:h-[8.75rem] py-2 md:py-3"
                    onChange={handleMessage}
                    value={formValues.message}
                />
                <p id="messageError" className="error hidden">
                    {formErrors.message}
                </p>
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
