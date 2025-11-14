import React, { useState, useEffect } from 'react'
import { Input, Select } from 'antd'

const { Option } = Select

type Props = {
    initialKey: string // 初始选择项
    options: {label: string, key: string, placeholder?: string}[]
		initialValue?: string
		selectWidth?: number | string // 选择框宽度
    inputWidth?: number | string // 输入框宽度
    suffix?: React.ReactNode // 输入框右侧的icon
    onChange?: (arg: Record<string, string>) => void
}

const SelectInput: React.FC<Props> = ({ initialKey, initialValue = '', options, selectWidth = 'auto', inputWidth = 220, suffix, onChange }) => {
		const [optionVal, setOptionVal] = useState(initialKey)
		const [inputVal, setInputVal] = useState(initialValue)

		useEffect(() => {
			setOptionVal(initialKey)
		}, [initialKey])

		useEffect(() => {
			setInputVal(initialValue)
		}, [initialValue])

    const onSelectChange = (key: string) => {
        setOptionVal(key)
        onChange && onChange({
            [key]: inputVal
        })
    }

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputVal(e.target.value)
        onChange && onChange({
            [optionVal]: e.target.value
        })
    }

    return (
        <Input.Group compact>
            <Select value={optionVal} onChange={onSelectChange} style={{ width: selectWidth }}>
                {options.map(item => (
                    <Option key={item.key} value={item.key}>{item.label}</Option>
                ))}
            </Select>
            <Input value={inputVal} onChange={onInputChange} placeholder={options.find(item => item.key === optionVal)?.placeholder || ''} style={{ width: inputWidth }} suffix={suffix} allowClear />
        </Input.Group>
    )
}

export default SelectInput
