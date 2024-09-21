import React from "react";
import { Check, Mail } from "lucide-react";
import Link from "next/link";

export default function messageCard ({ isOpen, id } : any ){
    return (
        <Link
            href={`/message/${id}`}
            className={`aspect-square rounded-xl border-[4px] grid place-items-center ${
                isOpen ? "bg-secondary" : "bg-primary border-dashed"
            }`}
        >
            {isOpen ? (
                <Check size={35} strokeWidth={2} />
            ) : (
                <Mail size={35} strokeWidth={2} />
            )}
        </Link>
    );
};

