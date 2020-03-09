import React, { Component } from "react";
import $ from 'jquery';
import "./index.css";

class Toast extends Component {
    componentDidUpdate() {
        //$('.toast').toast('show');
    }

    render() {
        return (
            <div>
                {this.props.list.map((item) => (
                    <div className="toast" role="alert" key={item} aria-live="assertive" aria-atomic="true" data-autohide="false">
                        <div className="toast-body">
                            {item}
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Toast;

