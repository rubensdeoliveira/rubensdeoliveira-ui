import { InputHTMLAttributes } from 'react'
import { IconProps } from './icon.component'
import { Control, Controller } from 'react-hook-form'

export type InputFileProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  name: string
  control: Control<any>
  icon?: IconProps
  label?: string
  containerClassName?: string
  inputClassName?: string
  defaultValue?: string
  type?: 'password' | 'text'
}

export function InputFile({
  name,
  icon,
  control,
  label,
  containerClassName,
  inputClassName,
  defaultValue = '',
  type = 'text',
  ...rest
}: InputFileProps) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <div className="rdoui-flex rdoui-items-center rdoui-justify-center rdoui-w-full">
          <label
            htmlFor="dropzone-file"
            className="rdoui-flex rdoui-flex-col rdoui-items-center rdoui-justify-center rdoui-w-full rdoui-h-64 rdoui-border-2 rdoui-border-gray-300 rdoui-border-dashed rdoui-rounded-lg rdoui-cursor-pointer rdoui-bg-gray-50 hover:rdoui-bg-gray-100"
          >
            <div className="rdoui-flex rdoui-flex-col rdoui-items-center rdoui-justify-center rdoui-pt-5 rdoui-pb-6">
              <svg
                className="rdoui-w-8 rdoui-h-8 rdoui-mb-4 rdoui-text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="rdoui-mb-2 rdoui-text-sm rdoui-text-gray-500">
                <span className="rdoui-font-semibold">Click to upload</span> or
                drag and drop
              </p>
              <p className="rdoui-text-xs rdoui-text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="rdoui-hidden" />
          </label>
        </div>
      )}
    />
  )
}
