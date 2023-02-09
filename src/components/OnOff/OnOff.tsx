import React from 'react'

type OnOffPropsType = {
  onOff: boolean
  setOnOff: (b: boolean) => void
}

export const OnOff: React.FC<OnOffPropsType> = ({ onOff, setOnOff }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    backgroundColor: onOff ? 'green' : 'white',
    padding: '2px',
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    backgroundColor: onOff ? 'white' : 'red',
    padding: '2px',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    marginLeft: '5px',
    backgroundColor: onOff ? 'green' : 'red',
  }
  const onClickHandler = () => {
    setOnOff(!onOff)
  }
  return (
    <>
      {/*<Div1>
                <On color={props.on ? 'green' : 'white'}>On</On>
                <Off color={props.on ? 'white' : 'red'}>Off</Off>
                <Circle color={props.on ? 'green' : 'red'}></Circle>
            </Div1>*/}
      <div style={containerStyle} onClick={onClickHandler}>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
      </div>
    </>
  )
}
