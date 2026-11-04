import { House } from 'lucide-react'
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
  ],
}
