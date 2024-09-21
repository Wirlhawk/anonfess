'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function getMessage(id : any) {
    const supabase = createClient()

    const { data , error } = await supabase
        .from('messages')
        .select('*')
        .eq('id', id) 
        .single() 

    if (error) {
        console.log("error : ", error.message)
    }

    return data
}

export async function getAllMessage() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const { data , error } = await supabase
        .from('messages')
        .select('*')
        .eq('user_id', user?.id) 

    if (error) {
        console.log("error : ", error.message)
    }

    return data
}