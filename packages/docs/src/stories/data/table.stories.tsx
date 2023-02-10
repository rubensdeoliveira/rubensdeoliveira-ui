import type { StoryObj, Meta } from '@storybook/react'
import { Table, TableModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Data/Table',
  component: Table,
  args: {
    setPage: () => {},
    page: 1,
    data: { data: [], last_page: 10, page: 1, record_count: 1000 },
    header: [
      { columnLabel: 'Nome', columnName: 'name', columnType: 'default' },
    ],
  },
} as Meta<TableModel>

export const Primary: StoryObj<TableModel> = {}
