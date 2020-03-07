import React from "react";
import Container from "./Container";
import Toast from "./Toast";

function Fridge(props) {
    return (
        <Container>
            <Toast list={props.list}/>
        </Container>
    )
    }
export default Fridge;