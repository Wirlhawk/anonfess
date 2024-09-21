import { LoginForm } from "@/components/auth/login";
import React from "react";

export default function page({ searchParams }: { searchParams: { message?: string } }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <LoginForm message={searchParams.message}/>
        </div>
    )
}

