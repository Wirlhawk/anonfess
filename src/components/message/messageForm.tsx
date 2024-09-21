"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { messageSchema } from "@/schema/index";
import { z } from "zod";
import { ReactNode } from 'react';
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import { sendMessage } from '@/app/send/[username]/action';
import { Message } from "@/types/custom";
import Link from "next/link";

export default function MessageForm({profileData} : any) {
    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            from: "",
            to: "",
            message:"",
            music:""
        },
    })

    async function onSubmit(values: z.infer<typeof messageSchema>) {
        const data: Message = {
            from: values.from || "",
            to: values.to || "",
            message: values.message,
            music: values.music || "",
        };

        await sendMessage(profileData.username,profileData.id, data)
    }

    const { settings } = profileData


    return (
        <CardWrapper profileData={profileData}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    { settings.to && (
                        <FormField
                            control={form.control}
                            name="to"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>To</FormLabel>
                                    <FormControl>
                                        <Input placeholder='??? (opsional)' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    { settings.from && (
                        <FormField
                            control={form.control}
                            name="from"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>From</FormLabel>
                                    <FormControl>
                                        <Input placeholder='??? (opsional)' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    
                    
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder='ketik pesan' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    { settings.music && (
                        <FormField
                            control={form.control}
                            name="music"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Music</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Judul lagu (opsional)' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    

                    {/* {message && <FormMessage>{message}</FormMessage>} */}
                    <Button
                        className="w-full mt-3 neu neu-active bg-secondary"
                        size={"lg"}
                        type="submit"
                    >
                        Kirim
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}

function CardWrapper({ children, profileData }: { children: ReactNode, profileData: any }) {
    console.log(profileData);

    return (
        <Card className="w-full max-w-[22rem] neu">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">AnonFess</CardTitle>
                <CardDescription>
                    Kirim pesan rahasia ke @{profileData?.username} 🤫
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Link
                    href={`/register`}
                    className="mx-auto mt-2 text-md font-medium flex gap items-center gap-2 underline"
                >
                    Coba Sekarang
                </Link>
            
            </CardFooter>
        </Card>
    );
}
