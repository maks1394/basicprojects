import * as React from 'react';
import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";

type Props = {
    minValue:number
    maxValue:number
    value:number
    className?:string
    // setValue:Dispatch<SetStateAction<number>>
    setValue:(n: number) => void
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
                   value={props.value}
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
  width:300px;
  height: 20px;
  //border: 1px solid green;
  position: relative;
  //display: inline-block;
  //justify-content: center;

  & .rail {
    //width: 300px;
    width:100%;
    height: 4px;
    border-radius:8px;
    background-color: gray;
    position: absolute;
    top: 50%;
    opacity: 0.38;
    transform:translateY(-50%);
  }
  
  & .track {
    //width: 300px;
    width:calc(${props => (props.value-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value-props.minValue)/(props.maxValue-props.minValue)*15}px + (15px/2));
    height: 4px;
    border-radius:8px;
    background-color: #00CC22;
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
  }
  & .thumb{
    --size:15px;
    pointer-events: none;
    cursor: pointer;
    position: absolute;
    width: var(--size);
    height: var(--size);
    //margin-left:  calc((var(--size)/(-2)));
    //transform:translateX(-50%);
    border: 1px solid #00CC22;
    background-color: #FFFFFF;
    border-radius: 50%;
    left:calc(${props => (props.value-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value-props.minValue)/(props.maxValue-props.minValue)*15}px);
    z-index: 1;
    top: 50%;
    transform:translateY(-50%);
  }
  & .thumb:before {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    background-color: #00CC22;
  }
  
  & input[type="range"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
    opacity: 0;
    //direction: ltr;
  }
  & input[type="range"]::-webkit-slider-runnable-track{
    -webkit-appearance: none;
  }
  & input[type="range"]::-moz-range-track{
    -moz-appearance: none;
  }
  & input[type="range"]::-webkit-slider-thumb{
    pointer-events: auto;
  }
`

