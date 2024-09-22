"use client"
import React from 'react'
import { useState } from "react";
import { Switch } from "@/components/ui/switch"
import { updateSetting } from '@/app/(auth)/action';

export default function SettingItem({ username, title , value } : { username: string , title : string , value : boolean}) {
    const [checked, setChecked] = useState( value );

    const isMessage = title === "message"


    return (
        <div className="flex justify-between">
            <h1 className='font-bold'>{title}</h1>
            <Switch
                disabled={ isMessage }
                checked={Boolean(checked)}
                onCheckedChange={async (val : boolean) => {
                    setChecked(val)
                    await updateSetting({
                        username,
                        key:title,
                        value: val
                    })
                }}
            />
        </div>
    );
}
