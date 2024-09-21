import React from 'react'
import { Card, CardHeader } from "@/components/ui/card";

export default function MessageItems({ title, content }: { title: string, content:string }) {
  return (
    <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <Card className="bg-secondary neu border-4 rounded-2xl" >
            <CardHeader className='p-4'>
                <h1 className="font-bold">{content}</h1>
            </CardHeader>
        </Card>
    </div>
  )
}
