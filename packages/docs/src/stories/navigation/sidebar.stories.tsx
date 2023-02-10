import type { StoryObj, Meta } from '@storybook/react'
import { Icon, SideBar, SideBarModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Navigation/SideBar',
  component: SideBar,
  args: {
    children: <span>Conteudo da sidebar</span>,
    sidebarMainItems: [
      {
        liChildren: <Icon name="AcademicCapIcon" />,
        isActive: true,
        label: 'Home',
      },
    ],
    sidebarSecondaryItems: [
      {
        liChildren: <Icon name="AcademicCapIcon" />,
        isActive: true,
        label: 'Home',
      },
    ],
    user: {
      email: 'contato@rubensdeoliveira.com',
      image:
        'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
      name: 'Rubens de Oliveira',
    },
  },
} as Meta<SideBarModel>

export const Primary: StoryObj<SideBarModel> = {}
