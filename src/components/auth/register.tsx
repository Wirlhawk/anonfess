"use client";
import { signUp } from "@/app/(auth)/action";
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
import { registerSchema } from "@/schema/index";
import { z } from "zod";
import CardWrapper from "./cardWrapper";
import FormButton from '@/components/formButton'
import { useState } from "react";

export function RegisterForm({ message }: { message?: string }) {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        setLoading(true);
        try {
            const data = {
                username: values.username,
                email: values.email,
                password: values.password,
            };
            await signUp(data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <CardWrapper
            description="Registrasi akun AnonFess anda"
            title="Register"
            backButtonHref="login"
            backButtonLabel="Login"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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

                    <FormButton title="Register" pending={loading} />
                </form>
            </Form>
        </CardWrapper>
    );
}
