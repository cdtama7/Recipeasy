import React from "react";
import Container from "./Container";
import Items from "./Items";

function Fridge(props) {
    return (
        <Container>
            <Items list={props.list} deleteItem = { props.deleteItem }/>
        </Container>
    )
    }
export default Fridge;