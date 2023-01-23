import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'Components/SelectV2',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const WithValue = () => {
    const [value, setValue] = useState('1')
    const items = [
        {value: '1', title: "Milk"},
        {value: '2', title: "Juice"}
    ]
    return (
        <>
            <Select value={value} items={items} onChange={setValue}/>
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(undefined)
    const items = [
        {value: '1', title: "Milk"},
        {value: '2', title: "Juice"}
    ]
    return (
        <>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <Select value={value} items={items} onChange={setValue}/>
        </>
    )
}