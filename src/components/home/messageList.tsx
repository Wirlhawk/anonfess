import React from 'react';
import MessageCard from './messageCard'; // Adjust the import path as necessary
import { getAllMessage } from '@/app/message/[id]/action';

export default async function MessageList() {
  const messages = await getAllMessage();
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {messages?.length === 0 ? (
        <h1>No messages found.</h1>
      ) : (
        messages?.map((message) => (
          <MessageCard key={message?.id} isOpen={message?.isOpen} id={message?.id} />
        ))
      )}
    </div>
  );
}
