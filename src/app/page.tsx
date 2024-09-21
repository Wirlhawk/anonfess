import React from 'react'
import Inbox from '@/components/home/inbox'
import PageHeader from '@/components/home/pageHeader'
import ShareLink from '@/components/home/shareLink'
import MessageList from '@/components/home/messageList'

export default function page() {
  return (
      <div className="flex flex-col max-w-md pt-16 px-6 pb-6 min-h-screen mx-auto gap-6">
          <div className='space-y-10'>
                <PageHeader title="AnonFess" />
                <ShareLink />
          </div>
          <hr className="border-dashed border-2 border-black w-full my-4" />
          <Inbox>
                <MessageList />
          </Inbox>
      </div>
  );
}
