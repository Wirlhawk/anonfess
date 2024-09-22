import React from "react";
import { Check, Mail } from "lucide-react";
import Link from "next/link";

export default function MessageCard({ isOpen, id }: { isOpen: boolean; id: string }) {
    return (
        <Link
            href={`/message/${id}`}
            passHref 
            className="w-full h-full"
        >
            <div
                className={`aspect-square rounded-xl border-[4px] grid place-items-center neu neu-active ${
                    isOpen ? "bg-secondary" : "bg-primary"
                }`}
            >
                {isOpen ? (
                    <Check size={35} strokeWidth={2} />
                ) : (
                    <Mail size={35} strokeWidth={2} />
                )}
            </div>
        </Link>
    );
}
