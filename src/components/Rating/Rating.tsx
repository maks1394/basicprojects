import React from 'react';
export type StarType =number /*0|1|2|3|4|5*/
type RatingPropsType = {
    /**
     * How many stars in Rating
     */
    value:StarType;
    setRatingValue:(value:StarType)=>void
}

export const Rating = (props:RatingPropsType)=>{

    const mappedStars:(n:StarType)=>JSX.Element[]=(n)=>{
        return [...Array(5)].map((_,i)=>{
            return <Star selected={i<n} setRatingValue={()=>{props.setRatingValue(i+1) }} key={i}>Star </Star>
        });
    }
    return(
        <>
            {mappedStars(props.value)}
        </>
    );
}
type StarPropsType = {
    selected:boolean
    children:React.ReactNode
    setRatingValue:()=>void
}

const Star :React.FC<StarPropsType> = ({selected,children,setRatingValue})=> {
  return  <span onClick={setRatingValue}>{selected ? <b>{children}</b> : children}</span>
}

