import * as React from 'react';
import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";

type Props = {
    minValue:number
    maxValue:number
    value:number[]
    setValue:Dispatch<SetStateAction<number[]>>
};
type PropsType = Props & {className?:string}
export const MultipleSlider = (props: PropsType) => {
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
                   value={props.value[0]}
                   max={props.maxValue}
                   className={'inputMin'}
                   onChange={(e) => {
                       props.setValue(([prevValue1,prevValue2])=>{
                           if (Number(e.target.value) < prevValue2){
                               return [Number(e.target.value),prevValue2]
                           } else {
                               return [prevValue1,prevValue2]
                           }
                       })
                   }}/>
            <input type="range" min={props.minValue}
                   max={props.maxValue}
                   value={props.value[1]}
                   className={'inputMax'}
                   onChange={(e) => {
                       props.setValue(([prevValue1,prevValue2])=>{
                           if (Number(e.target.value)>prevValue1){
                               return [prevValue1,Number(e.target.value)]
                           } else {
                               return [prevValue1,prevValue2]
                           }
                       })
                   }}/>
            <span className={'thumbMin'} onMouseDown={(e)=>e.preventDefault()}></span>
            <span className={'thumbMax'} onMouseDown={(e)=>e.preventDefault()}></span>

        </div>
    );
};


export const MyMultipleSlider = styled(MultipleSlider)<Props>`
  width:300px;
  height: 20px;
  //border: 1px solid green;
  position: relative;
  //display: inline-block;
  //display: flex;
  //justify-content: center;

  & .rail {
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
    --left:calc(${props => (props.value[0]-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value[0]-props.minValue)/(props.maxValue-props.minValue)*15}px + (15px/2));
    --width:calc(${props=>(props.value[1]-props.value[0])/(props.maxValue-props.minValue)*100}% - ${props=>(props.value[1]-props.value[0])/(props.maxValue-props.minValue)*15}px);
    height: 4px;
    border-radius:8px;
    background-color: #00CC22;
    position: absolute;
    left:var(--left);
    width:var(--width);
    top: 50%;
    transform:translateY(-50%);
  }
  & .thumbMin{
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
    left:calc(${props => (props.value[0]-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value[0]-props.minValue)/(props.maxValue-props.minValue)*15}px);
    z-index: 1;
    top: 50%;
    transform:translateY(-50%);
  }
  & .thumbMin:before {
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
  & .thumbMax{
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
    left:calc(${props => (props.value[1]-props.minValue)/(props.maxValue-props.minValue)*100}% - ${props=>(props.value[1]-props.minValue)/(props.maxValue-props.minValue)*15}px);
    z-index: 1;
    top: 50%;
    transform:translateY(-50%);
  }
  & .thumbMax:before {
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
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;
    margin: 0;
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
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
  //& .inputMin:active ~.thumbMin{
  //  background-color: #00CC22;
  //}
  //& .inputMax:active ~.thumbMax{
  //  background-color: #00CC22;
  //}
`

