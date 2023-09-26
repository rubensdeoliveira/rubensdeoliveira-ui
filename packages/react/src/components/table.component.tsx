import { SetStateAction } from 'react'
import { generatePagesArray } from '../helpers/generate-pages-array'
import { InputText, InputTextProps } from './input-text.component'

type ListEntitiesProps<EntityType> = {
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

export type TableProps = {
  header: TableHeader[]
  data: ListEntitiesProps<any> | undefined
  page: number
  setPage: (update: SetStateAction<number>) => void
  searchInput?: InputTextProps
}

export function Table({
  header,
  page,
  data,
  setPage,
  searchInput,
}: TableProps) {
  const siblingsCount = 1
  const previousPages =
    page > 1 ? generatePagesArray(page - 1 - siblingsCount, page - 1) : []
  const nextPages =
    data && page < data.last_page
      ? generatePagesArray(page, Math.min(page + siblingsCount, data.last_page))
      : []

  if (!data) {
    return null
  }

  return (
    <div className="rdoui-relative rdoui-overflow-x-auto rdoui-shadow-md sm:rdoui-rounded-lg">
      {searchInput && (
        <div className="rdoui-pb-4 ">
          <InputText {...searchInput} />
        </div>
      )}
      <table className="rdoui-w-full rdoui-text-sm rdoui-text-left rdoui-text-gray-500">
        <thead className="rdoui-text-xs rdoui-text-gray-700 rdoui-uppercase rdoui-bg-gray-50">
          <tr>
            <th scope="col" className="rdoui-p-4">
              <div className="rdoui-flex rdoui-items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="rdoui-w-4 rdoui-h-4 rdoui-text-blue-600 rdoui-bg-gray-100 rdoui-border-gray-300 rdoui-rounded focus:rdoui-ring-blue-500"
                />
                <label htmlFor="checkbox-all-search" className="rdoui-sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="rdoui-px-6 rdoui-py-3">
              Product name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" rdoui-border-b hover:rdoui-bg-gray-50">
            <td className="rdoui-w-4 rdoui-p-4">
              <div className="rdoui-flex rdoui-items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="rdoui-w-4 rdoui-h-4 rdoui-text-blue-600 rdoui-bg-gray-100 rdoui-border-gray-300 rdoui-rounded focus:rdoui-ring-blue-500"
                />
                <label
                  htmlFor="checkbox-table-search-1"
                  className="rdoui-sr-only"
                >
                  checkbox
                </label>
              </div>
            </td>
            <td className="rdoui-px-6 rdoui-py-4">Silver</td>
          </tr>
        </tbody>
      </table>
      <nav
        className="pt-4 flex items-center justify-between"
        aria-label="Table navigation"
      >
        <span className="text-sm font-400 text-gray-500 dark:text-gray-400">
          Exibindo{' '}
          <span className="font-600 text-gray-900 dark:text-white">
            {(data.page - 1) * 20 + 1}-{data.page * 20}
          </span>{' '}
          de{' '}
          <span className="font-600 text-gray-900 dark:text-white">
            {data.record_count}
          </span>
        </span>
        <ul className="-space-x-px inline-flex items-center">
          <li>
            <a
              href="#"
              className="ml-0px block rounded-l-lg border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <div className="rdoui-btn-group rdoui-self-center">
            {page > 1 + siblingsCount && (
              <>
                <button
                  onClick={() => setPage(1)}
                  className="rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700"
                >
                  1
                </button>
                {page > 2 + siblingsCount && (
                  <button className="rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700">
                    ...
                  </button>
                )}
              </>
            )}

            {previousPages.map((previousPage) => (
              <button
                key={previousPage}
                className="rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700"
                onClick={() => setPage(previousPage)}
              >
                {previousPage}
              </button>
            ))}

            <button
              key={page}
              className="rdoui-z-10 rdoui-border rdoui-border-blue-300 rdoui-bg-blue-50 rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-blue-600 hover:rdoui-bg-blue-100 hover:rdoui-text-blue-700"
              onClick={() => setPage(1)}
            >
              {page}
            </button>

            {nextPages.map((nextPage) => (
              <button
                key={nextPage}
                className="rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700"
                onClick={() => setPage(nextPage)}
              >
                {nextPage}
              </button>
            ))}

            {data && page + siblingsCount < data.last_page && (
              <>
                {page + 1 + siblingsCount < data.last_page && (
                  <button className="rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700">
                    ...
                  </button>
                )}
                <button
                  className=" rdoui-border rdoui-border-gray-300  rdoui-px-12px rdoui-py-8px rdoui-leading-tight rdoui-text-gray-500 hover:rdoui-bg-gray-100 hover:rdoui-text-gray-700"
                  onClick={() => setPage(data.last_page)}
                >
                  {data.last_page}
                </button>
              </>
            )}
          </div>
          <li>
            <a
              href="#"
              className="block rounded-r-lg border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
