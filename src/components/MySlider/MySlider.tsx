import * as React from 'react';
import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";

type Props = {
    minValue:number
    maxValue:number
    value:number
    className?:string
    setValue:Dispatch<SetStateAction<number>>
};
export const Slider = (props: Props) => {
    // const style={
    //     border: '0px',clip: 'rect(0px, 0px, 0px, 0px)',height: 100%,margin: -1px,overflow: hidden,padding: 0px,position: absolute,white-space: nowrap;width: 100%;direction: ltr;
    // }
    return (
        <div className={props.className} >
        {/*<div className={'container'}>*/}
        {/*</div>*/}
            <span className={'rail'}></span>
            <span className={'track'}></span>
            <input type="range" min={props.minValue}
                   max={props.maxValue}
                   onChange={(e) => {
                       props.setValue(Number(e.target.value))
                       console.log((e.target.value)) }}/>
            <span className={'thumb'} onMouseDown={(e)=>e.preventDefault()}>
            </span>

        </div>
    );
};


export const MySlider = styled(Slider)<Props>`
  margin-top: 40px;
  margin-left: 100px;
  width:300px;
  height: 20px;
  border: 1px solid green;
  position: relative;
  display: flex;
  justify-content: center;
  
  & .container {
    //width: 300px;
    width:calc(${props => (props.value-props.minValue)/(props.maxValue-props.minValue)*100}%);
    height: 20px;
    background-color: black;
  }
  & .thumb{
    pointer-events: none;
    cursor: pointer;
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: pink;
    left:calc(${props => (props.value-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value-props.minValue)/(props.maxValue-props.minValue)*15}px);
    z-index: 1;
    top: 50%;
    transform:translateY(-50%);
  }
  & input{
    //border: 0px;
    //clip: rect(0px, 0px, 0px, 0px);
    display: inline-block;
    height: 100%;
    margin: 0px;
    //overflow: hidden;
    //padding: 0px;
    //position: absolute;
    //white-space: nowrap;
    width: calc(100% - 0px);
    z-index: 11;
    //opacity: 0;
    //direction: ltr;
  }
`

