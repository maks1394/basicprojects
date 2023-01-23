import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {useArgs} from '@storybook/client-api';


export default {
    title: 'Components/Accordion',
    component: Accordion,
    args: {
        title: 'TITLE',
        collapsed: true,
        items:[{value:'1',title:'TITLE'}]
    },
    argTypes: {
        setCollapsed: {control: false}  //{table:{disable:true}} - Same, but it will disappear in documentation
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
    const [{collapsed}, setCollapsed] = useArgs();

    return <Accordion {...args} title={args.title} collapsed={collapsed}
                      setCollapsed={(newCollapsed) => setCollapsed({collapsed: newCollapsed})}/>
}
export const FalseCollapsed = Template.bind({})
FalseCollapsed.args = {
    collapsed: false,
    title: 'HIDE ME'
}

export const Collapsed = Template.bind({})
Collapsed.args = {
    collapsed: true,
    title: 'Default'
}

/*export const Default:ComponentStory<typeof Accordion> = ()=>{
    const [{ collapsed }, updateArgs] = useArgs();
    // const [collapsed,setCollapsed] = useState<boolean>(true)
    // const handleClose = (collapsed:boolean) => updateArgs({ collapsed: !collapsed });
    return <Accordion title={'TITLE1'}  collapsed={collapsed} setCollapsed={(newCollapsed)=>updateArgs({collapsed:newCollapsed})} />
}*/

