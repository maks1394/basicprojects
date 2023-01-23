import * as React from 'react';
import {ChangeEvent} from "react";

type Props = {
    value: string
    onChange: (text: string) => void
};
export const Input = ({value, onChange}: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }
    return (
        <input value={value} onChange={onChangeHandler}/>
    );
};