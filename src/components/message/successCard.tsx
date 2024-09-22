import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Check, Mail } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessCard({ username } : { username: string }) {
    return (
        <Card className="w-full max-w-[22rem] neu">
            <CardContent className="pt-8 ">
                <div className="w-full flex items-center flex-col gap-4">
                    <div className="w-fit aspect-square rounded-full bg-secondary p-4 border-4">
                        <Check size={70} strokeWidth={2.6} color="white" />
                    </div>
                    <h1 className="font-bold text-xl">Message terkirim</h1>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
                <Button
                    className="w-full mt-3 neu neu-active bg-primary"
                    size={"lg"}
                    type="submit"
                    asChild
                >
                    <Link href="/">Cobain Sekarang</Link>
                </Button>

                {username && (
                    <Link
                        href={`/send/${username}`}
                        className="mx-auto mt-2 text-md font-medium flex gap items-center gap-2 underline"
                    >
                        Kirim Message Kembali
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}
