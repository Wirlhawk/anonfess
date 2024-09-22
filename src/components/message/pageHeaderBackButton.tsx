import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function PageHeaderBackButton({title} : {title : string}) {
    return (
        <div className="flex justify-between items-center">
            <Link href="/">
                <Button variant="ghost" size="icon" asChild>
                    <ChevronLeft size={35} strokeWidth={2.5} />
                </Button>
            </Link>
            <h1 className="text-3xl font-bold">{title}</h1>
            <Button variant="ghost" size="icon" asChild className="opacity-none">
                <ChevronLeft size={35} strokeWidth={2.5} color="white"/>
            </Button>
        </div>
    );
}
