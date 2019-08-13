import React from "react";

const Option = (props) => (
    <div className="option">
        <li className="option__title">{props.option}</li>
        <p className="option__remove" onClick={() => {props.handleDeleteOption(props.option)}}>Eliminar</p>
    </div>
);

export default Option;