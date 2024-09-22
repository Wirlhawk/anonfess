import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";
import MessageForm from "@/components/message/messageForm"
import { getUserProfileByUsername } from '@/app/(auth)/action';
import NotFound from '@/components/message/notFound';

export async function generateMetadata(
    { params }: { params : { username : string}},
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { username } = params
    return {
        title: `Kirim Pesan Rahasia ke ${username}`,
        description: "AnonFess, Kirim Pesan Rahasia!",
        openGraph: {
            title: `Kirim Pesan Rahasia ke ${username}`,
            description: "Kirim Pesan Rahasia dengan AnonFess!",
            images: [
                {
                    url: "/assets/banner.png",
                    width: 800,
                    height: 500,
                    alt: "AnonFess preview image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Kirim Pesan Rahasia ke ${username}`,
            description: "Kirim Pesan Rahasia dengan AnonFess!",
            images: ["/assets/banner.png"],
        },
        icons: {
            icon: "/assets/logo.ico",
        },
    };
}

export default async function page({ params }: { params: { username: string } }) {
    const { username } = params
    
    const profileData = await getUserProfileByUsername(username)
    

    if (!profileData) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
                <NotFound/>
            </div>
        );
    }

    const pageMetadata = metadata(username);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <MessageForm profileData={profileData}/>
        </div>
  );
}
