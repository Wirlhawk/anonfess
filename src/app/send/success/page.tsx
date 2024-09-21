"use client"
import SuccessCard from '@/components/message/successCard';
import { useSearchParams } from 'next/navigation';

export default function Page({ searchParams } : { searchParams : { username : string } }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <SuccessCard username={searchParams.username}/>
        </div>
    );
}
