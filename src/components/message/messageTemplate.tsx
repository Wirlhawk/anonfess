
import MessageItems from "./messageItem"
import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import { Button } from "@/components/ui/button"

export default function MessageTemplate({ message }: any) {
    const dateTime = new Date(message.created_at); 
    const formattedDate = dateTime.toLocaleDateString("en-GB"); 
    const formattedTime = dateTime
        .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })
        .toUpperCase();
    
    // const captureRef = useRef();

    // const downloadImage = async () => {
    //     const canvas = await html2canvas(captureRef.current);
    //     const link = document.createElement('a');
    //     link.href = canvas.toDataURL('image/png');
    //     link.download = 'download.png';
    //     link.click();
    // };

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4" >
                <hr className="border-dashed border-2 border-black w-full my-4" />
                <div className="flex justify-between text-muted-foreground font-bold">
                    <p>{formattedTime}</p>
                    <p>{formattedDate}</p>
                </div>
                {message.from !== "" && (
                    <MessageItems title="From" content={message.from} />
                )}
                {message.to !== "" && (
                    <MessageItems title="To" content={message.to} />
                )}
                {message.message !== "" && (
                    <MessageItems title="Message" content={message.message} />
                )}
                {message.music !== "" && (
                    <MessageItems title="Music" content={message.music} />
                )}
                <hr className="border-dashed border-2 border-black w-full my-4" />
            </div>

            {/* <Button
                onClick={downloadImage}
                className="w-full h-[63px] text-xl neu neu-active rounded-2xl"
            >
                Download & Share
            </Button> */}
        </div>
    );
}


