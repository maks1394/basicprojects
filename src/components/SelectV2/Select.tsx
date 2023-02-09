import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'
import s1 from '../Select/Select.module.css'
import s2 from '../Select/Option/Option.module.css'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";



type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
};
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const toggleItems = () => {
        setActive(prev => !prev)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(false)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        let index: number | undefined;
        if (hoveredItem) {
            index = props.items.indexOf(hoveredItem)
        } else {
            index = undefined;
        }
        if (index !== props.items.length - 1 && e.key === 'ArrowDown') {
            if (index !== undefined) {
                let hoveredIndex = Math.min(props.items.length - 1, index + 1)
                setHoveredElementValue(props.items[hoveredIndex].value)
                props.onChange(props.items[hoveredIndex].value)
            } else {
                setHoveredElementValue(props.items[0].value)
                props.onChange(props.items[0].value)
            }
        }
        if (index !== 0 && e.key === 'ArrowUp') {
            if (index !== undefined) {
                let hoveredIndex = Math.max(0, index - 1)
                setHoveredElementValue(props.items[hoveredIndex].value)
                props.onChange(props.items[hoveredIndex].value)
            } else {
                //setHoveredElementValue(props.items[props.items.length-1].value)
            }
        }
        if (e.key === 'Enter') {
            props.onChange(hoveredElementValue)
            setActive(false)
        }
        if (e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            {/*<div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span onClick={toggleItems} className={s.main}>{selectedItem && selectedItem.title}</span>
                {
                    active && <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s.item + (i === hoveredItem ? ' ' + s.selected : '')}
                            onClick={() => onItemClick(i.value)}
                            key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>*/}
            <div onKeyUp={onKeyUpHandler} tabIndex={0} className={s1.select}>
                <div onClick={toggleItems} className={s1.selected + (active ? ' ' + s.selectMode : '')}>{selectedItem ? selectedItem.title :
                    <span className={s1.span}>Select...</span>}{active ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
                {/*<div className={s.mappedOptions}>{selectMode ? mappedOptions : ''}</div>*/}
                {
                    /*active &&*/ <div className={s1.mappedOptions +(active ? ' ' + s1.mappedOptionsActive : '')}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s2.option + (i === hoveredItem ? ' ' + s2.checkedOption : '')+(active ? ' ' + s2.optionInActive : '')}
                            onClick={() => onItemClick(i.value)}
                            key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
};