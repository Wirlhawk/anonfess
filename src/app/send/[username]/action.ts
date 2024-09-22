'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { messageSchema } from '@/schema/index';
import { Message } from '@/types/custom';
import { revalidatePath } from 'next/cache'


export async function sendMessage(username: string ,userId: string, data: Message) {
    const supabase = createClient();
    const parsedData = messageSchema.safeParse(data);

    if (!parsedData.success) {
        throw new Error('Validation failed');
    }

    const { from, to, message, music } = parsedData.data;

    const { data: messageData, error } = await supabase
        .from('messages')
        .insert([{
            user_id: userId,
            from,
            to,
            message,
            music,
        }])
        .select()
    
    if (error) {
        console.log("error : ", error.message)
    }

    revalidatePath('/')
    redirect(`/send/success?username=${username}`)
}
