import { MessagesSquare } from 'lucide-react'
import { ChatWindow } from '@/components/chat-window'
import { Main } from '@/components/layout/main'

export function ChatTemplate() {
  return (
    <Main fixed fluid id='content' tabIndex={-1} className='min-h-0 gap-4'>
      <h1 className='text-2xl font-bold tracking-tight'>聊天窗口模板</h1>
      <div className='flex min-h-0 flex-1 flex-col gap-4 sm:flex-row'>
        <aside
          aria-label='会话列表'
          className='flex shrink-0 flex-col rounded-md border sm:w-44 lg:w-48'
        >
          <h2 className='flex items-center gap-2 border-b p-3 font-medium'>
            <MessagesSquare className='size-5' aria-hidden='true' />
            会话列表
          </h2>
          <p className='p-3 text-sm text-muted-foreground'>暂无会话</p>
        </aside>
        <ChatWindow />
      </div>
    </Main>
  )
}
