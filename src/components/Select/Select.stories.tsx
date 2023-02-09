import { Select } from './Select'
import { Option } from './Option/Option'
import { useState } from 'react'

export default {
  title: 'Components/Select',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export const SelectSuper = () => {
  const [value, setValue] = useState('1')
  return (
    <>
      <div>
        <Select value={value} setValue={setValue}>
          <Option value={'1'}>Milk</Option>
          <Option value={'2'}>Coffee</Option>
        </Select>
      </div>
      <div>HI</div>
    </>
  )
}

export const SelectSuper2 = () => {
  const [value, setValue] = useState('1')
  return (
    <>
      <div>
        <Select value={value} setValue={setValue}>
          <Option value={'1'}>Milk</Option>
          {/*<Option value={'2'}>Coffee</Option>*/}
        </Select>
      </div>
      <div>HI</div>
    </>
  )
}

export const SelectSuperUndefined = () => {
  const [value, setValue] = useState(undefined)
  return (
    <>
      <div>
        <Select value={value} setValue={setValue}>
          <Option value={'1'}>Milk</Option>
          <Option value={'2'}>Coffee</Option>
        </Select>
      </div>
      <div>HI</div>
    </>
  )
}
export const SelectSuperManyChild = () => {
  const [value, setValue] = useState(undefined)
  return (
    <>
      <div>
        <Select value={value} setValue={setValue}>
          <Option value={'1'}>Milk</Option>
          <Option value={'2'}>Coffee</Option>
          <Option value={'3'}>Spaghetti</Option>
          <Option value={'4'}>Sugar</Option>
          <Option value={'5'}>Tea</Option>
          <Option value={'6'}>Lemon</Option>
        </Select>
      </div>
      <div>HI</div>
    </>
  )
}

export const SelectSuperWithoutChild = () => {
  const [value, setValue] = useState(undefined)
  return (
    <>
      <div>
        <Select value={value} setValue={setValue}></Select>
      </div>
      <div>HI</div>
    </>
  )
}
