import { House, LayoutDashboard, MessagesSquare } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: '导航',
      items: [
        {
          title: '首页',
          url: '/',
          icon: House,
        },
      ],
    },
    {
      title: '界面模板',
      items: [
        { title: '聊天窗口', url: '/templates/chat', icon: MessagesSquare },
        { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
      ],
    },
  ],
}
