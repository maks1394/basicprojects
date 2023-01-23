import * as React from 'react';
import {TourType} from "../Tours";
import s from './Tour.module.css'
import {useState} from "react";

type Props =TourType & {
    removeTour:(id:string)=>void
};
export const Tour = ({id,image,info,price,name,removeTour}: Props) => {
    const [readMore,setReadMore] = useState<boolean>(false)
    return (
        <div className={s.container}>
            <img src={image} alt={name}/>
            <footer>
                <div>{name}</div>
                <div>${price}</div>
                <p>{readMore? info:`${info.substring(0,200)}...`}<button className={s.readMore} onClick={()=>setReadMore(!readMore)}>
                    {readMore?'Hide':'Show more'}
                </button></p>
                <button onClick={()=>removeTour(id)}>Not interested</button>
            </footer>
        </div>
    );
};