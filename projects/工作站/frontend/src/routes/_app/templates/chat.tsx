import { createFileRoute } from '@tanstack/react-router'
import { ChatTemplate } from '@/features/templates/chat'

export const Route = createFileRoute('/_app/templates/chat')({
  component: ChatTemplate,
})
