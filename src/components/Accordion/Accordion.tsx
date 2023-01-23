import React, {Dispatch, SetStateAction} from 'react';
type ItemType = {
    title:string
    value:string|number
}

type AccordionPropsType = {
    title:string;
    collapsed:boolean;
    setCollapsed:Dispatch<SetStateAction<boolean>>
    items:ItemType[]
    onClick:(value:string)=>void
}

export const Accordion = (props:AccordionPropsType)=>{
    return(
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={props.collapsed} />
            {!props.collapsed&&<AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type UATPropsType = {
    title:string
    setCollapsed:Dispatch<SetStateAction<boolean>>
    collapsed:boolean
}
const AccordionTitle:React.FC<UATPropsType> = ({title,setCollapsed,collapsed})=>{
    const onClickHandler = ()=>{
        setCollapsed(!collapsed)
    }
    return (
        <h3 onClick={()=>onClickHandler()}>{title}</h3> //Storybook
    )
}

type AccordionBodyType = {
    items:ItemType[]
    onClick:(value:string)=>void
}

const AccordionBody = (props:AccordionBodyType)=>{
    const onClickHandler = (value:string)=>{
        props.onClick(value)
    }

    return(
        <>
            {props.items.map(el=><div onClick={()=>onClickHandler(el.value.toString())} key={el.value}>{el.title}</div>)}
        </>
    )
}