import { SetStateAction } from 'jotai'
import { generatePagesArray } from '../helpers/generate-pages-array'

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
}

export function Table({ header, page, data, setPage }: TableProps) {
  if (!data) {
    return null
  }

  const renderTableHeader = () => {
    return (
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        {header.map((headerItem) => (
          <>
            <th
              scope="col"
              className="py-12px px-24px"
              key={headerItem.columnName}
            >
              {headerItem.columnLabel}
            </th>
          </>
        ))}
        <th scope="col" className="px-24px py-12px">
          Action
        </th>
      </tr>
    )
  }

  const renderTableRows = () => {
    return data.data.map((dataItem: any, index: number) => (
      <tr
        key={index}
        className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      >
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        {header.map((headerItem) => {
          if (headerItem.columnType === 'subtitled') {
            return (
              <th
                key={headerItem.columnName}
                scope="row"
                className="flex items-center whitespace-nowrap py-16px px-24px font-medium text-gray-900 dark:text-white"
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">
                    {dataItem[headerItem.columnName]}
                  </div>
                </div>
              </th>
            )
          }
          return (
            <td key={headerItem.columnName} className="py-12px px-24px">
              {dataItem[headerItem.columnName]}
            </td>
          )
        })}
        <td className="py-16px px-24px">
          <a
            href="#"
            type="button"
            data-modal-show="editUserModal"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit user
          </a>
        </td>
      </tr>
    ))
  }

  const renderTablePagination = () => {
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
            <button
              onClick={() => setPage(1)}
              className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </button>
            {page > 2 + siblingsCount && (
              <button className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                ...
              </button>
            )}
          </>
        )}

        {previousPages.map((previousPage) => (
          <button
            key={previousPage}
            className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage(previousPage)}
          >
            {previousPage}
          </button>
        ))}

        <button
          key={page}
          className="z-10 border border-blue-300 bg-blue-50 px-12px py-8px leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          onClick={() => setPage(1)}
        >
          {page}
        </button>

        {nextPages.map((nextPage) => (
          <button
            key={nextPage}
            className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage(nextPage)}
          >
            {nextPage}
          </button>
        ))}

        {data && page + siblingsCount < data.last_page && (
          <>
            {page + 1 + siblingsCount < data.last_page && (
              <button className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                ...
              </button>
            )}
            <button
              className="border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setPage(data.last_page)}
            >
              {data.last_page}
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 flex items-center justify-between bg-white dark:bg-gray-800">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pl-3 pointer-events-none absolute inset-y-0 left-0 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="text-sm w-80 p-2 pl-10 block rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="text-sm w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          {renderTableHeader()}
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div
        id="editUserModal"
        tabIndex={-1}
        aria-hidden="true"
        className="h-modal p-4 fixed top-0 left-0 right-0 z-50 hidden w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-2xl md:h-auto">
          <form
            action="#"
            className="relative rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <div className="p-4 flex items-start justify-between rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit user
              </h3>
              <button
                type="button"
                className="text-sm p-1.5 ml-auto inline-flex items-center rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="editUserModal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-6 gap-24px">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Bonnie"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Green"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="example@company.com"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone-number"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="e.g. +(12)3456 789"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="department"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Development"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="number"
                    name="company"
                    id="company"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="123456"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="current-password"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="new-password"
                    className="text-sm mb-2 block font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    className="text-sm p-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
            <div className="space-x-2 p-6 flex items-center rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                className="text-sm py-2.5 rounded-lg bg-blue-700 px-20px text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
      <nav
        className="pt-4 flex items-center justify-between"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Exibindo{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {(data.page - 1) * 20 + 1}-{data.page * 20}
          </span>{' '}
          de{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.record_count}
          </span>
        </span>
        <ul className="-space-x-px inline-flex items-center">
          <li>
            <a
              href="#"
              className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-12px py-8px leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

          {renderTablePagination()}

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
