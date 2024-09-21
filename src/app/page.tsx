import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { signOut, getUserProfile } from "@/app/(auth)/action"

export default async function Home() {
    const supabase = createClient();

    const { data: messages } = await supabase.from("messages").select("*");
    const userProfile  = await getUserProfile();

    const user = userProfile?.user;
    const profile = userProfile?.profile;

    return (
        <div className="flex flex-col justify-center p-8 gap-8">
            {messages?.map((message) => (
                <Button key={message.id}>{message.message}</Button>
            ))}


            <form action={signOut} className="flex items-center gap-3">
              <p>{user?.email}</p>
              <p>{profile.username}</p>
              <Button>Sign Out</Button>
            </form>
        </div>
    );
}

