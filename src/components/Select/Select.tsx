import * as React from 'react'
import { DetailedHTMLProps, Dispatch, SetStateAction, useState } from 'react'
import { Option } from './Option/Option'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import s from './Select.module.css'

type DefaultDivType = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type SelectProps = DefaultDivType & {
  // children:JSX.Element[]|JSX.Element
  children?: ReturnType<typeof Option>[] | ReturnType<typeof Option>
  // children:React.ReactNode
  value: string | undefined
  setValue:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<undefined>>
}
export const Select = ({ children, setValue, value, ...restProps }: Props) => {
  const [selectMode, setSelectMode] = useState<boolean>(false)
  let selected
  let checked = false
  let mappedOptions: any[] = []

  const onClickOptionHandler = () => {
    setSelectMode(false)
  }
  if (Array.isArray(children)) {
    mappedOptions = children.map((el) => {
      checked = false
      if (value === el.props.value) {
        selected = el.props.children
        checked = true
      }
      return (
        <Option
          {...el.props}
          key={el.props.value}
          checked={checked}
          onClick={onClickOptionHandler}
          setValue={setValue}
        />
      )
    })
  } else {
    if (children) {
      selected = children.props.children
      checked = true
      mappedOptions = [
        <Option
          {...children.props}
          onClick={onClickOptionHandler}
          setValue={setValue}
          checked
        />,
      ]
    }
    // selected = children.props.children
    // checked = true
    // mappedOptions = [<Option {...children.props} onClick={onClickOptionHandler} setValue={setValue} checked/>]
  }
  const onClickSelectedHandler = () => {
    setSelectMode((prev) => !prev)
  }
  const finalClassNameForSelect =
    s.select + (restProps.className ? ' ' + restProps.className : '')
  const finalClassNameForSelected =
    s.selected + (selectMode ? ' ' + s.selectMode : '')
  return (
    <div {...restProps} className={finalClassNameForSelect}>
      <div
        onClick={onClickSelectedHandler}
        className={finalClassNameForSelected}
      >
        {selected ? selected : <span className={s.span}>Select...</span>}
        {selectMode ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div className={s.mappedOptions}>{selectMode ? mappedOptions : ''}</div>
    </div>
  )
}

