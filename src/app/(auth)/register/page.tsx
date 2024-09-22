import { RegisterForm } from "@/components/auth/register";
import React from "react";
import { authRouteMiddleware } from "../action";

export default async function page({ searchParams }: { searchParams: { message?: string } }) {
    await authRouteMiddleware()

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <RegisterForm message={searchParams.message}/>
        </div>
    )
}

