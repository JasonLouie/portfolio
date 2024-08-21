import React from "react";
import Button from "./Button";

interface ModalProps {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ title, message, isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-n-6 rounded-lg overflow-hidden shadow-lg max-w-sm w-full translate-y-[-5rem]">
                <div className="p-4 border-b border-n-4 text-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <div className="p-4 text-center">
                    <p>{message}</p>
                </div>
                <div className="p-4 border-t border-n-4 flex justify-center">
                    <Button
                        onClick={onClose}
                        className="bg-n-5 text-white px-4 py-2 rounded-md hover:bg-n-4"
                    >
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
}
