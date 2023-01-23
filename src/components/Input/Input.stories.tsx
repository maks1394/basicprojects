import React, {ChangeEvent, useState} from 'react';
import {useArgs} from '@storybook/client-api';
import {Input} from "./Input";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/Input',
    component: Input,
    args: {
        value: ''
    },
    argTypes: {
        onChange: {control: false}  //{table:{disable:true}} - Same, but it will disappear in documentation
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [{value}, setValue] = useArgs();

    return <Input value={value} onChange={(value) => setValue({value})}/>
}
export const EmptyInput = Template.bind({})
EmptyInput.args = {
    value: ''
}

export const InputWithText = Template.bind({})
InputWithText.args = {
    value: 'text'
}

/*export const Default:ComponentStory<typeof Accordion> = ()=>{
    const [{ collapsed }, updateArgs] = useArgs();
    // const [collapsed,setCollapsed] = useState<boolean>(true)
    // const handleClose = (collapsed:boolean) => updateArgs({ collapsed: !collapsed });
    return <Accordion title={'TITLE1'}  collapsed={collapsed} setCollapsed={(newCollapsed)=>updateArgs({collapsed:newCollapsed})} />
}*/

export const ControlledCheckbox = () => {
    const [checked,setChecked]= useState(true)
    return <input type={'checkbox'} checked={checked} onChange={ action('want change')}/>
}

export const ControlledSelect = () => {
    const [value,setValue]= useState<string |undefined>('2')
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }
    return <select value={value} onChange={onChangeHandler}>
        <option value={'1'}>name1</option>
        <option value={'2'}>name2</option>
        <option value={'3'}>name3</option>
    </select>
}

