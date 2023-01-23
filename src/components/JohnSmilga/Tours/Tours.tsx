import * as React from 'react';
import {useEffect, useState} from "react";
import {Loading} from "../Loading/Loading";
import {Tour} from "./Tour/Tour";
import { AiOutlineArrowDown } from "react-icons/ai";
import s from './Tours.module.css'
export type TourType = {
    id:string
    name:string
    info:string
    image:string
    price:string
}
type Props = {
    url: string
};
export const Tours = ({url}: Props) => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState<TourType[]>([])
    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const fetchedTours = await response.json()
            setLoading(false)
            return fetchedTours
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchTours().then((tours) => setTours(tours)).catch((error)=>{
            console.log(error)})
    },[])
    const removeTour:(id:string)=>void=(id)=>{
        setTours(tours.filter((el)=>el.id!==id))
    }

    if (loading) {
        return <><Loading/></>
    }
    const mappedTours = tours.map((tour)=>{
        const {id,...restProps} = tour
        return <Tour id={tour.id} {...restProps} removeTour={removeTour}/>
    })
    const onClickRefreshHandler = ()=>{
        fetchTours().then((tours) => setTours(tours)).catch((error)=>{
            console.log(error)})
    }
    return (
        <div>
            <div>Our Tours<AiOutlineArrowDown className={s.icon}/></div>
            {mappedTours}
            {tours.length===0 && <button className={s.btn} onClick={onClickRefreshHandler}>Refresh</button>}
        </div>
    );
};