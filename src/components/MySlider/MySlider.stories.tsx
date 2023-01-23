import {useState} from "react";
import {MySlider} from "./MySlider";

export default {
    title: 'Components/MySlider',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const Slider = () => {
    const [value, setValue] = useState(20)
    return (
        <MySlider minValue={0} maxValue={100} value = {value} setValue={setValue}/>
    )
}