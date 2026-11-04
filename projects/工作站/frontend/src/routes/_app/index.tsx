import { createFileRoute } from '@tanstack/react-router'
import { Main } from '@/components/layout/main'

export const Route = createFileRoute('/_app/')({
  component: () => (
    <Main id='content' tabIndex={-1}>
      <h1 className='text-2xl font-bold tracking-tight'>首页</h1>
    </Main>
  ),
})
