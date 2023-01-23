import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Tours} from "./components/JohnSmilga/Tours/Tours";
import {ReviewType} from "./data/data";
import {Reviews} from "./components/JohnSmilga/Reviews/Reviews";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

const url = 'https://course-api.com/react-tours-project'

type PropsType = {
    data: ReviewType[]
}

function App({data}: PropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            {/*<Tours url={url}/>*/}
            {/*<Reviews data={data}/>*/}
            {/*<Accordion title={'TITLE'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            <UncontrolledAccordion title={"tt"} collapsed={true}/>
        </div>
    );
}

export default App;
