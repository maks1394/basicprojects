// @flow
import * as React from 'react';
import {ReviewType} from "../../../data/data";
import s from './Reviews.module.css'
import {Review} from "./Review/Review";

type Props = {
    data: ReviewType[]
};
export const Reviews = ({data}: Props) => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2>Our reviews</h2>
                <div className={s.underline}></div>
            </div>
            <Review data={data}/>
        </div>
    );
};