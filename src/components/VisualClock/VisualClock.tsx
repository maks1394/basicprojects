// @flow
import * as React from 'react'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'

type Props = {}

const setTime = () => {
  let date = new Date(Date.now())
  const secondsRatio = date.getSeconds() / 60
  const minutesRatio = secondsRatio / 60 + date.getMinutes() / 60
  const hoursRation = minutesRatio / 12 + date.getHours() / 12
  const secondsDiv = document.querySelector(
    '[data-seconds-hand]'
  ) as HTMLElement
  const minutesDiv = document.querySelector(
    '[data-minutes-hand]'
  ) as HTMLElement
  const hoursDiv = document.querySelector('[data-hours-hand]') as HTMLElement
  secondsDiv.style.setProperty('--rotation', String(secondsRatio * 360))
  minutesDiv.style.setProperty('--rotation', String(minutesRatio * 360))
  hoursDiv.style.setProperty('--rotation', String(hoursRation * 360))
}

export const VisualClock = (props: Props) => {
  useEffect(() => {
    setTime()
    let id = setTimeout(function tick() {
      setTime()
      id = setTimeout(tick, 1000)
    }, 1000)
    return () => {
      clearTimeout(id)
    }
  }, [])

  const checkMarks: JSX.Element[] = [...Array(60)].map((_, i) => {
    return (
      <div className={`Styled_clock_checkMarkContainer${i}`}>
        <div className={`Styled_clock_checkMark${i}`}></div>
      </div>
    )
  })
  return (
    <StyledClock>
      <div className="Styled_hand Styled_hand_seconds" data-seconds-hand></div>
      <div className="Styled_hand Styled_hand_minutes" data-minutes-hand></div>
      <div className="Styled_hand Styled_hand_hours" data-hours-hand></div>
      <div className="Styled_clock_number Styled_clock_number1">
        <span>1</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number2">
        <span>2</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number3">
        <span>3</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number4">
        <span>4</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number5">
        <span>5</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number6">
        <span>6</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number7">
        <span>7</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number8">
        <span>8</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number9">
        <span>9</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number10">
        <span>10</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number11">
        <span>11</span>
      </div>
      <div className="Styled_clock_number Styled_clock_number12">
        <span>12</span>
      </div>
      {checkMarks}
    </StyledClock>
  )
}

type PropsTypeStyledClock = {
  seconds: number
  minutes: number
  hours: number
}

// const StyledClock = styled.div<PropsTypeStyledClock>(props=>({width:'300px'}))

// const StyledClock = styled.div<PropsTypeStyledClock>(props=>{
//     const style:CSSProperties = {
//         width:'300px',
//         height: '300px',
//         backgroundColor: 'rgba(255,255,255,.8)',
//         border: '1px solid black',
//         borderRadius: '50%',
//     }
//     return `style`
// })

const StyledClock = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  & .Styled_clock_number {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
  }
  ${createCSS()};
  & .Styled_hand {
    --rotation: 0;
    position: absolute;
    left: 50%;
    bottom: 50%;
    width: 5px;
    height: 40%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #66bf3c;
    transform-origin: bottom;
    transform: translate(-50%) rotate(calc(var(--rotation) * 1deg));
  }
  & .Styled_hand_seconds {
    width: 2px;
    background-color: crimson;
    z-index: 11;
  }
  & .Styled_hand_minutes {
    height: 35%;
    background-color: #282c34;
    z-index: 10;
  }
  & .Styled_hand_hours {
    height: 30%;
    background-color: #282c34;
    z-index: 9;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background-color: #0066cc;
    border-radius: 50%;
    z-index: 12;
  }
  & span {
    margin-top: 10px;
    display: inline-block;
  }
  ${createCssCheckMarks()};
`

function createCSS() {
  let styles = ``
  for (let i = 1; i <= 12; i += 1) {
    styles += `
        .Styled_clock_number${i} {
        transform: rotate(calc(${i}/12 * 360deg));
        }
     `
  }
  return css`
    ${styles}
  `
}

function createCssCheckMarks() {
  let styles = ``
  for (let i = 0; i <= 60; i++) {
    styles += `
        .Styled_clock_checkMarkContainer${i}{
        width:100%;
        height:100%;
        position:absolute;
        transform: rotate(calc(${i}/60 * 360deg));
        display:flex;
        justify-content:center;
        align-items:flex-start;
        }
        .Styled_clock_checkMark${i}{
        width:${i % 5 === 0 ? '3px' : '1px'};
        height:${i % 5 === 0 ? '10px' : '6px'};
        background-color:${i % 5 === 0 ? 'black' : '#0066CC'};
        }
      `
  }
  return css`
    ${styles}
  `
}

// animation-delay: ${i - 1.5}s;
