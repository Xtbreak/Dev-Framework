import { useState } from 'react'
import { MessagesSquare, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type ChatWindowProps = {
  title?: string
  messages?: ChatMessage[]
}

export function ChatWindow({
  title = '聊天窗口',
  messages = [],
}: ChatWindowProps) {
  const [draft, setDraft] = useState('')

  return (
    <section
      aria-label={title}
      className='flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-md border bg-background'
    >
      <div className='flex items-center gap-2 border-b p-4'>
        <MessagesSquare className='size-5' aria-hidden='true' />
        <h2 className='font-medium'>{title}</h2>
      </div>
      <div
        role='log'
        aria-label='消息记录'
        aria-live='polite'
        className='flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4'
      >
        {messages.length === 0 ? (
          <div className='m-auto space-y-2 text-center'>
            <MessagesSquare
              className='mx-auto size-10 text-muted-foreground'
              aria-hidden='true'
            />
            <p className='font-medium'>暂无消息</p>
            <p className='text-sm text-muted-foreground'>此处展示聊天消息。</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'max-w-[85%] rounded-2xl px-3 py-2 break-words whitespace-pre-wrap',
                message.role === 'user'
                  ? 'self-end rounded-br-none bg-primary text-primary-foreground'
                  : 'self-start rounded-bl-none bg-muted'
              )}
            >
              <span className='sr-only'>
                {message.role === 'user' ? '你：' : '助手：'}
              </span>
              {message.content}
            </div>
          ))
        )}
      </div>
      <div className='space-y-2 border-t p-4'>
        <label htmlFor='chat-draft' className='sr-only'>
          消息内容
        </label>
        <div className='flex items-end gap-2'>
          <textarea
            id='chat-draft'
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder='输入消息…'
            rows={3}
            aria-describedby='chat-template-note'
            className='min-w-0 flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
          <Button type='button' disabled aria-describedby='chat-template-note'>
            <Send className='size-4' aria-hidden='true' />
            发送
          </Button>
        </div>
        <p id='chat-template-note' className='text-xs text-muted-foreground'>
          仅供界面预览，输入内容不会发送或保存。
        </p>
      </div>
    </section>
  )
}
