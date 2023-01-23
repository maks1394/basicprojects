import React, {useState} from 'react';
type StarType = 1|2|3|4|5|0;
type RatingPropsType = {
    value:number;
}

export const UncontrolledRating = (props:RatingPropsType)=>{
    const [value,setValue]=useState<number>(props.value)
    const onMouseEnterHandler = (i:number)=>{
        setValue(i+1)
    }

    const mappedStars:(n:number)=>JSX.Element[]=(n)=>{
        return [...Array(5)].map((_,i)=>{
            const starStyle = {
                color:(i<n)? 'red':'black'
            }
            /*const onMouseEnterHandler = (i:number)=>{
                setValue(i+1)
            }*/
            return <Star selected={i<n} callback={()=>onMouseEnterHandler(i)}/>

        });
    }
    return(
        <div>
            {mappedStars(value)}
        </div>
    );
}
type StarPropsType = {
    selected:boolean
    callback:()=>void
}

const Star:React.FC<StarPropsType> = ({selected,callback})=>{
    const onClickHandler = ()=>{
        callback()
    }
    return <span onClick={onClickHandler}>{selected? <b>Star </b>:'Star '}</span>
}

