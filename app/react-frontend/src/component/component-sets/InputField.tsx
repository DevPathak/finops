import { ChangeEvent } from "react"

interface LabelledInputType {
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

type RadioProps = {
    name: string,
    items: {value: string, label: string}[],
    value: string | null,
    onChange: (value: string) => void
}

export type SelectOptions = {
    label: string,
    value: string
}

type SelectProps = {
    header?: string,
    value?: string,
    disabled?: boolean,
    className?: string,
    options: SelectOptions[],
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  };

  type BasicInputFieldProps = {
    header?: string,
    placeholder?: string,
    disabled?: string,
    type: string,
    value?: number,
    key?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }

  type DisabledInputFieldProps = {
    header?: string,
    placeholder?: string,
    disabled?: string,
    type?: string,
    value: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }

  type ToggleFieldProps = {
    header?: string,
    checked?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }

  type CheckBoxProps = {
    header?: string,
    checked?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }

  type ButtonProps = {
    header: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  }

export function LabelledInput({ placeholder, onchange, type } : LabelledInputType) {
    return <div>
    <div className="relative mb-6">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input onChange={onchange} type= {type || "text"} id="input-group-1" className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder={ placeholder } required />
</div>
</div>
}

export function OtpInput() {
    return <div className="max-w-sm mx-auto">
        <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
                <label className="sr-only">First code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
            <div>
                <label className="sr-only">Second code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
            <div>
                <label className="sr-only">Third code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
            <div>
                <label className="sr-only">Fourth code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
            <div>
                <label className="sr-only">Fifth code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
            <div>
                <label className="sr-only">Sixth code</label>
                <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" required />
            </div>
        </div>
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please introduce the 6 digit code we sent via email.</p>
    </div>
}

export function PasswordInput({ placeholder, onchange }: LabelledInputType) {
    return <div className="relative">
    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
        </svg>
    </div>
    <input onChange={onchange} type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
            placeholder={placeholder} required />
</div>
}

export function RadioGroup({ name, items, value, onChange }: RadioProps) {
    return (<>
        {items.map(item => (
            <div key={item.value} className="flex">
                <div className="flex items-center me-4">
                        <input
                            name={name}
                            type="radio"
                            value={item.value}
                            id={name + item.value}
                            checked={value === item.value}
                            onChange={e => onChange(e.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        /> <label htmlFor={name + item.value} className="cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {item.value} </label>
                </div>
            </div>
        ))}
    </>
    )
}

export function SelectInputField({ value, disabled, className, options, onChange } : SelectProps) {
    return <div>
      <select onChange={onChange} value={value} className={className} disabled={disabled}>
        {options.map(({ value, label }) => (
            <option key={value} value={value}>
                {label}
            </option>
        ))}
      </select>
    </div>
    
}

export function SelectInputField1({ header, value, disabled, className, options, onChange } : SelectProps) {
    return <div>
      <label className="sr-only">{header}</label>
      <select onChange={onChange} value={value} className={className} disabled={disabled}>
        {options.map(({ value, label }) => (
            <option key={value} value={value}>
                {label}
            </option>
        ))}
      </select>
    </div>
    
}

export function BasicInputField({ header, placeholder, type, value, key, onChange }: BasicInputFieldProps) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{header}</label>
        <input type= {type} onChange={onChange} value={value} key={key} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" placeholder={placeholder} required step="any"/>
    </div>
}

export function DisabledInputField({ header, placeholder, value, type }: DisabledInputFieldProps) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{header}</label>
        <input type= {type || "text"} id="first_name" value={value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 bg-slate-200
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" placeholder={placeholder} required disabled/>
    </div>
}

export function ToggleField({ header, checked, onChange }: ToggleFieldProps) {
    return <div>
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">{header}</span>
    </label>
    </div>
}

export function CheckBoxField({ header, onChange }:CheckBoxProps) {
    return <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-1" type="checkbox" onChange={onChange} value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{header}</label>
</div>
}

export function ButtonType({ header, onClick }:ButtonProps) {
    return <button type="button" onClick={onClick} className="w-10/12 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        {header}
        </button>
}