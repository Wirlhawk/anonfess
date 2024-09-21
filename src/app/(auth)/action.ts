'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Header } from 'next/dist/lib/load-custom-routes'
import { Provider } from '@supabase/supabase-js'
import { registerSchema, loginSchema } from "@/schema/index";

export async function emailLogin(data: { email: string; password: string }) {
    const supabase = createClient()
    const parsedData = loginSchema.safeParse(data)

    if (!parsedData.success) {
        throw new Error('Validation failed')
    }


    const { email, password } = parsedData.data

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        redirect('/login?message=Invalid email or password')
    }

    revalidatePath('/');
    redirect('/');
} 

export async function signUp(data : {username: string,email:string,password:string}) {
    const supabase = createClient()
    const parsedData = registerSchema.safeParse(data)

    if (!parsedData.success) {
        throw new Error('Validation failed')
    }
    const { username, email, password } = parsedData.data

    const { data: usernameExist } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username) 
        .single(); 

    if (usernameExist) {
        redirect('/register?message=Username telah di pakai')
    }

    const { data: userData, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) {
        redirect('/register?message=Gagal Register Akun')
    }

    const userId = userData?.user?.id;

    const { error: profileError } = await supabase
        .from('profiles')
        .upsert(
            {
                id: userId,
                username 
            }
        );

    if (profileError) {
        console.log(profileError)
        redirect('/register?message=Gagal Register Profile')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut(){
	const supabase = createClient()
	await supabase.auth.signOut()
	redirect('/login')
}

export async function getUserProfile() {
    const supabase = createClient();

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData) {
        console.error('Error fetching user:', userError?.message);
        return null; // Handle the error as needed
    }

    const userId = userData.user.id;

    const { data: profileData, error: profileFetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single(); // Assuming each user has a single profile

    if (profileFetchError) {
        console.error('Error fetching profile:', profileFetchError.message);
        return null; // Handle the error as needed
    }

    return {
        user: userData.user,
        profile: profileData ,
    }
}

export async function getUserProfileByUsername( username :string ){
   const supabase = createClient();

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username) 
        .single(); 

    if ( error || !data) {
        console.error('Error fetching profile:', error?.message);
        return null; 
    }

    return data
}