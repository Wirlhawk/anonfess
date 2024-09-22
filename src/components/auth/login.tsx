"use client";
import { emailLogin } from "@/app/(auth)/action";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema/index";
import { z } from "zod";
import CardWrapper from "./cardWrapper";
import { useState } from "react";
import FormButton from "@/components/formButton";

export function LoginForm({ message }: { message?: string }) {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        setLoading(true)
        try {
            const data = {
                email: values.email,
                password: values.password,
            };
            await emailLogin(data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <CardWrapper
            description="Masuk ke akun AnonFess anda"
            title="Login"
            backButtonHref="register"
            backButtonLabel="Register"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="m@mail.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {message && <FormMessage>{message}</FormMessage>}

                    <FormButton title="Login" pending={loading} />
                </form>
            </Form>
        </CardWrapper>
    );
}
