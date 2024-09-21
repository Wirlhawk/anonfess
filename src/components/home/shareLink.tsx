import React from 'react'
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function ShareLink() {
  return (
    <Button className="w-full h-[63px] text-xl neu neu-active rounded-2xl">
        Share Link
        <Send size={20} strokeWidth={2.5} className="ml-2" />
    </Button>
  )
}
