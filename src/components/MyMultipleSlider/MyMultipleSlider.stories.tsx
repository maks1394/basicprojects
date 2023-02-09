import {useState} from "react";
import {MyMultipleSlider} from "./MyMultipleSlider";
import {MySlider} from "../MySlider/MySlider";

export default {
    title: 'Components/MyMultipleSlider',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const Slider = () => {
    const [value, setValue] = useState<number[]>([20, 50])
    return (
        <MyMultipleSlider minValue={0} maxValue={100} value={value} setValue={setValue}/>
    )
}

export const SliderVSMultipleSlider = () => {
    const [value, setValue] = useState<number[]>([20, 50])
    return (
        <>
            {value[0]}
            <MyMultipleSlider minValue={0} maxValue={100} value={value} setValue={setValue}/>
            <MySlider minValue={0} maxValue={100} value={value[0]} setValue={(n: number) => setValue([n, value[1]])}/>
            {value[1]}
        </>
    )
}