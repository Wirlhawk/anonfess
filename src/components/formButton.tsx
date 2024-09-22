'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';


export default function FormButton({ title, pending } : { title : string, pending : boolean }) {
    return (
        <Button
            className="w-full mt-3 neu neu-active bg-secondary"
            size={"lg"}
            type="submit"
            disabled={pending}
        >
            {pending ? <LoaderCircle className="animate-spin" /> : title}
        </Button>
    );
}
