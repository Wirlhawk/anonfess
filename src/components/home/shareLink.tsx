import React from 'react'
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import SettingList from './settingList';
import CopyLink from './copyLink';



export default function ShareLink({ profile } : { profile : any} ) {
    console.log("gaboleh ada message",profile)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full h-[63px] text-xl neu neu-active rounded-2xl">
                    Share Link
                    <Send size={20} strokeWidth={2.5} className="ml-2" />
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-[22rem] gap-0">
                <DialogHeader>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>
                        Bagikan link untuk mendapatkan message
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-4">
                    <hr className="border-dashed border-2 border-black w-full my-4" />
                    <SettingList settings={profile.settings} username={profile.username} />
                    <hr className="border-dashed border-2 border-black w-full my-4" />
                    <CopyLink username={profile.username} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
