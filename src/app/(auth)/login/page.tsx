import { LoginForm } from "@/components/auth/login";
import React from "react";
import { authRouteMiddleware } from "../action";

export default async function page({ searchParams }: { searchParams: { message?: string } }) {
    await authRouteMiddleware();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <LoginForm message={searchParams.message}/>
        </div>
    )
}

