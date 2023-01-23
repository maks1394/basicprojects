import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import {OnOff} from "./OnOff";



export default {
    title: 'Components/OnOff',
    component: OnOff,
    args:{
        onOff:true
    },
    argTypes:{
        setOnOff:{control:false}  //{table:{disable:true}} - Same, but it will disappear in documentation
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args)=>{
    const [{onOff},setArgs] = useArgs();

    return <OnOff onOff={onOff} setOnOff={(onOff)=>setArgs({onOff:onOff})} />
}
export const On = Template.bind({})
On.args={
    onOff:true
}

export const Off = Template.bind({})
Off.args={
    onOff:false
}

/*export const Default:ComponentStory<typeof Accordion> = ()=>{
    const [{ collapsed }, updateArgs] = useArgs();
    // const [collapsed,setCollapsed] = useState<boolean>(true)
    // const handleClose = (collapsed:boolean) => updateArgs({ collapsed: !collapsed });
    return <Accordion title={'TITLE1'}  collapsed={collapsed} setCollapsed={(newCollapsed)=>updateArgs({collapsed:newCollapsed})} />
}*/

