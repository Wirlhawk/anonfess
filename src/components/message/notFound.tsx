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

export default function NotFound() {
    return (
        <Card className="w-full max-w-[22rem] neu">
            <CardContent className="pt-8 ">
                <div className="w-full flex items-center flex-col gap-4">
                    <h1 className="font-bold text-7xl text-secondary">404</h1>
                    <h1 className="font-bold text-xl">Tidak Dapat Di Temukan</h1>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">

                <Link
                    href={`/`}
                    className="mx-auto mt-2 text-md font-medium flex gap items-center gap-2 underline"
                >
                    Kembali
                </Link>

            </CardFooter>
        </Card>
    );
}
