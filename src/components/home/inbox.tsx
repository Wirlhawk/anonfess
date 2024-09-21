import React from "react";
import MessageList from './messageList';
import { ReactNode } from 'react';

export default function Inbox({children} : {children : ReactNode}) {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Inbox</h1>
                {/* badge */}
            </div>
            {/* Message List */}
            { children }
        </div>
    );
}
