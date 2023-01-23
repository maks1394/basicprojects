import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import {Rating} from "./Rating";


export default {
    title: 'Components/Rating',
    component: Rating,
    args:{
        value:0
    },
    argTypes:{
        setRatingValue:{control:false}  //{table:{disable:true}} - Same, but it will disappear in documentation
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args)=>{
    const [{value},setArgs] = useArgs();

    return <Rating value={value} setRatingValue={(value)=>setArgs({value:value})}/>
}
export const OneStarRating = Template.bind({})
OneStarRating.args={
    value:1
}

export const FiveStarRating = Template.bind({})
FiveStarRating.args={
    value:5
}

/*export const Default:ComponentStory<typeof Accordion> = ()=>{
    const [{ collapsed }, updateArgs] = useArgs();
    // const [collapsed,setCollapsed] = useState<boolean>(true)
    // const handleClose = (collapsed:boolean) => updateArgs({ collapsed: !collapsed });
    return <Accordion title={'TITLE1'}  collapsed={collapsed} setCollapsed={(newCollapsed)=>updateArgs({collapsed:newCollapsed})} />
}*/
const TemplateSimple: ComponentStory<typeof Rating> = (args)=> <Rating {...args}/>;

const Example  = TemplateSimple.bind({})

Example.args = {
    value:1
}

