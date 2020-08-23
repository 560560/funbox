import React from 'react';
import GoodsContainer from "./Components/GoodsContainer";
import {Row} from "react-bootstrap";


const App = (props) => {
    return (
        <Row className="app__wrapper">
            <GoodsContainer/>

        </Row>
    );
}

export default App;