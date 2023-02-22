import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/okr/': [
    {
      text: 'OKR 的背景',
      children: [
        '/okr/README.md',
        '/okr/2022.md',
        '/okr/2023.md',
      ],
    },
    {
      text: 'OKR 之剑',
      children: [
        '/okr/swordman/README.md',
      ],
    },
  ],
  '/weekly/': [
    {
      text: 'Overview',
      children: [
        '/weekly/README.md',
      ]
    },
    {
      text: '2023',
      children: [
        '/weekly/2023.md',
        '/weekly/2023-q1.md',
      ]
    },
    {
      text: '2022',
      collapsible: true,
      children: [
        '/weekly/2022.md',
        '/weekly/2022-q1.md',
        '/weekly/2022-q2.md',
        '/weekly/2022-q3.md',
        '/weekly/2022-q4.md',
      ]
    }
  ],
  '/team/': [
    {
      text: '',
      children: [
        '/team/README.md',
        '/team/culture.md',
        '/team/feedback.md',
        '/team/join_us.md',
        '/team/meeting.md',
        '/team/rules.md',
        '/team/team_mgmt.md',
      ],
    },
  ]
}
