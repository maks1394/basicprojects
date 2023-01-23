// @flow
import * as React from 'react';
import {DetailedHTMLProps, Dispatch, SetStateAction, useEffect, useState} from "react";
import s from './Option.module.css'

type DefaultDivType = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type Props = DefaultDivType & {
    value: string
    children: string
    setValue?: Dispatch<SetStateAction<string>>
    checked?: boolean
};
export const Option = ({children, setValue, value, ...restProps}: Props) => {
    const [checked, setChecked] = useState(restProps.checked)
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setValue?.(value)
        restProps.onClick?.(e)
    }
    /*useEffect(()=>{
        setChecked(restProps.checked)
    },[restProps.checked])*/
    const finalClassName = s.option + (checked ? ' ' + s.checkedOption : '') + (restProps.className ? ' ' + restProps.className : '')
    return (
        <div {...restProps} className={finalClassName} onClick={onClickHandler}>
            {children}
        </div>
    );
};