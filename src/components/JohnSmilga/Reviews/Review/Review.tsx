// @flow
import * as React from 'react';
import {ReviewType} from "../../../../data/data";
import {useState} from "react";
import s from './Review.module.css'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

type Props = {
    data: ReviewType[]
};
export const Review = ({data}: Props) => {
    const [index, setIndex] = useState<number>(0)
    const {name, job, image, text} = data[index]
    const checkNumber = (n:number)=>{
        if (n===data.length){
            return 0
        }
        if (n<0){
            return data.length-1
        }
        return n
    }
    const prevPerson = () => {
        setIndex((index) => checkNumber(index-1))
    }
    const nextPerson = () => {
        setIndex((index) => checkNumber(index+1))
    }
    const randomPerson = ()=>{
        const randomIndex = Math.floor(Math.random()*data.length)
        if (randomIndex===index){
            setIndex(checkNumber(index+1))
        } else {
            setIndex(randomIndex)
        }
    }
    return (
        <div className={s.review + ' ' + s.margin}>
            <div className={s.img_container}>
                <img src={image} alt={name} className={s.person_img}/>
                <span className={s.quote_icon}>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className={s.author}>{name}</h4>
            <p className={s.job}>{job}</p>
            <p className={s.info}>{text}</p>
            <div>
                <button className={s.prev_btn} onClick={prevPerson}><FaChevronLeft/></button>
                <button className={s.next_btn} onClick={nextPerson}><FaChevronRight/></button>
            </div>
            <button className={s.random_btn} onClick={randomPerson}>surprise me</button>
        </div>
    );
};