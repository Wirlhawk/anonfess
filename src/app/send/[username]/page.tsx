import React from 'react'

import MessageForm from "@/components/message/messageForm"
import { getUserProfileByUsername } from '@/app/(auth)/action';
import NotFound from '@/components/message/notFound';


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

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <MessageForm profileData={profileData}/>
        </div>
  );
}
