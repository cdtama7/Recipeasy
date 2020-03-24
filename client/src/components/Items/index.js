import React from "react";
import { Toast, ToastBody } from 'reactstrap';

import "./index.css";

const Items = (props) => {
        const clickHandler = event => {
            let id = event.target.getAttribute("data-item-id");
            props.deleteItem(id);
        }

        return (
            <React.Fragment>
                <div className="fridge-header labelOne">Your Fridge</div>
                {props.list.map((item) => (
                    <Toast key={item._id}>
                        <ToastBody>
                            {item.name}
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick = { clickHandler }>
                                <span aria-hidden="true" data-item-id={item._id}> &times;</span>
                            </button>
                            </ToastBody>
                    </Toast>
                ))}
            </React.Fragment>
        )
    }

export default Items;

