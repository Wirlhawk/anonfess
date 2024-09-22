"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import Link from 'next/link';
import { Label } from "../ui/label";

export default function CopyLink({ username }: { username: string }) {
    const [url] = useState(`https://anonfess.fun/send/${username}`);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            alert("Link telah di copy ke clipboard!")
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <>
            <div className="grid flex-1 gap-2">
                <p className="text-muted-foreground font-bold">Copy Link</p>
                <div className="flex justify-between gap-2">
                    <Input id="link" value={url} readOnly />
                    <Button
                        type="button"
                        size="icon"
                        className="px-3 aspect-square border-2"
                        onClick={copyToClipboard}
                    >
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" color="black" />
                    </Button>
                </div>
            </div>
            <Button
                className="w-full mt-3 neu neu-active bg-secondary"
                size={"lg"}
                type="submit"
                asChild
            >
                <Link href={`/send/${username}`}>Kirim Message</Link>
            </Button>
        </>
    );
}
