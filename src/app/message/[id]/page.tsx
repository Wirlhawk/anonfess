import React from 'react'
import PageHeaderBackButton from '@/components/message/pageHeaderBackButton'
import MessageTemplate  from '@/components/message/messageTemplate'
import { getMessage, openMessage } from "./action";


export default async function page({ params } : { params : { id : string }}) {
    const { id } = params

    const message = await getMessage(id)

    if( !message.isOpen ) {
        await openMessage( message.id )
    }

    return (
        <div className="flex flex-col max-w-md pt-12 px-6 pb-6  min-h-screen mx-auto gap-6">
            <div>
                <PageHeaderBackButton title="Message"/> 
            </div>
            <MessageTemplate message={message} />
        </div>
    )
}
