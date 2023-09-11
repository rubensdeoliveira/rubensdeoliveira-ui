import type { StoryObj, Meta } from '@storybook/react'
import { Table, TableProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    setPage: () => {console.log('')},
    page: 1,
    data: {
      data: [{ name: 'arthur' }, { name: 'jose' }],
      last_page: 10,
      page: 1,
      record_count: 1000,
    },
    header: [
      { columnLabel: 'Nome', columnName: 'name', columnType: 'default' },
    ],
  },
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {}
