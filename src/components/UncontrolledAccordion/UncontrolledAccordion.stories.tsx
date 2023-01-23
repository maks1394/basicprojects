
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'Components/UncontrolledAccordion',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const UncontrolledAccordionExample = () => {
    return (
        <>
            <UncontrolledAccordion title={'Menu'} collapsed={true}/>
        </>
    )
}