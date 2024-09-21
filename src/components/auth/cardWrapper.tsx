"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

const CardWrapper = ({
    description,
    title,
    backButtonHref,
    backButtonLabel,
    children,
}: {
    description: string,
    title: string,
    backButtonHref: string,
    backButtonLabel: string,
    children: ReactNode,
}) => {
    return (
        <Card className="w-full max-w-[22rem] neu">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <Link
                    href={`/${backButtonHref}`}
                    className="mx-auto mt-2 text-md font-medium flex gap items-center gap-2"
                >
                    <LinkIcon className="w-4" />
                    {backButtonLabel}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
