import React from "react";
import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { signOut } from "@/app/(auth)/action";

export default function PageHeader({title} : {title : string}) {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{title}</h1>

            <Dialog>
                <DialogTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Settings />
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[22rem] gap-0">
                    <DialogHeader>
                        <DialogTitle>Setting</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-2 py-4">
                        <hr className="border-dashed border-2 border-black w-full my-4" />
                        <form action={signOut}>
                            <Button
                                className="w-full mt-3 neu neu-active bg-secondary"
                                size={"lg"}
                                type="submit"
                            >
                                Keluar Akun
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
