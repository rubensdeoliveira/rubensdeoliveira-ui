import { SetStateAction } from 'jotai'
import { Button } from '../../form/button'
import { generatePagesArray } from './helpers'

type ListEntitiesModel<EntityType> = {
  data: EntityType[]
  page: number
  last_page: number
  record_count: number
}

type TableHeader = {
  columnName: string
  columnLabel: string
  columnType?: 'default' | 'subtitled' | 'tagged'
}

export type TableModel = {
  header: TableHeader[]
  data: ListEntitiesModel<any> | undefined
  page: number
  setPage: (update: SetStateAction<number>) => void
}

export function Table({ header, page, data, setPage }: TableModel) {
  if (!data) {
    return null
  }

  const renderTableHeader = header.map((headerItem) => (
    <th key={headerItem.columnName}>{headerItem.columnLabel}</th>
  ))

  const renderTableRow = data.data.map((dataItem: any, index: number) => (
    <tr key={index}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      {header.map((headerItem) => {
        if (headerItem.columnType === 'subtitled') {
          return (
            <td key={headerItem.columnName}>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    {dataItem[headerItem.columnName]}
                  </div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
          )
        }
        if (headerItem.columnType === 'tagged') {
          return (
            <td key={headerItem.columnName}>
              {dataItem[headerItem.columnName]}
              <br />
              <span className="badge-ghost badge badge-sm">
                Desktop Support Technician
              </span>
            </td>
          )
        }
        return (
          <td key={headerItem.columnName}>{dataItem[headerItem.columnName]}</td>
        )
      })}
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  ))

  function renderTablePagination() {
    const siblingsCount = 1
    const previousPages =
      page > 1 ? generatePagesArray(page - 1 - siblingsCount, page - 1) : []
    const nextPages =
      data && page < data.last_page
        ? generatePagesArray(
            page,
            Math.min(page + siblingsCount, data.last_page),
          )
        : []
    return (
      <div className="btn-group self-center">
        {page > 1 + siblingsCount && (
          <>
            <button className="btn" onClick={() => setPage(1)}>
              1
            </button>
            {page > 2 + siblingsCount && (
              <button className="btn-disabled btn">...</button>
            )}
          </>
        )}

        {previousPages.map((previousPage) => (
          <button
            key={previousPage}
            className="btn"
            onClick={() => setPage(previousPage)}
          >
            {previousPage}
          </button>
        ))}

        <button
          key={page}
          className="btn btn-active"
          onClick={() => setPage(1)}
        >
          {page}
        </button>

        {nextPages.map((nextPage) => (
          <button
            key={nextPage}
            className="btn"
            onClick={() => setPage(nextPage)}
          >
            {nextPage}
          </button>
        ))}

        {data && page + siblingsCount < data.last_page && (
          <>
            {page + 1 + siblingsCount < data.last_page && (
              <button className="btn-disabled btn">...</button>
            )}
            <button className="btn" onClick={() => setPage(data.last_page)}>
              {data.last_page}
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="self-end">
        <Button label="Cadastrar" className="self-end" />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              {renderTableHeader}
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTableRow}</tbody>
        </table>
      </div>
      {renderTablePagination()}
    </div>
  )
}
