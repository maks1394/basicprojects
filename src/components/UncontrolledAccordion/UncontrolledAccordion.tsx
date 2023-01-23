import React, {Dispatch, useReducer, useState} from "react";

type PropsType = {
    title: string;
    collapsed: boolean;
}

type ActionType = {
    type: string
}

type StateType = {
    collapsed:boolean
}

export const reducer = (state:StateType,action:ActionType):StateType =>{
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':{
            debugger
            return {...state,collapsed:!state.collapsed}
        }
        default:
            return state
    }
}

export const UncontrolledAccordion = (props: PropsType) => {
    //const [collapsed,setCollapsed] = useState<boolean>(props.collapsed)
    const [state,dispatch] = useReducer(reducer, {collapsed: props.collapsed})

    const onClickHandler = ()=>{
         dispatch({type:'TOGGLE-COLLAPSED'})
    }
    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} onClick={onClickHandler}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
            {/*<div onClick={onClickHandler}>{props.title}</div>
            {!collapsed && <div>Menu</div>}*/}
        </div>
    );
}
type UATPropsType = {
    title:string
    onClick:()=>void
}
const UncontrolledAccordionTitle:React.FC<UATPropsType> = ({title,onClick})=>{
    return (
        <h3 onClick={onClick}>{title}</h3>
    )
}

const UncontrolledAccordionBody = ()=>{
    return(
        <div>Menu</div>
    )
}

