import React from "react";

const Option = (props) => {
    return (
        <div>
            <li>{props.option}</li>
            <button onClick={() => {props.handleDeleteOption(props.option)}}>Eliminar</button>
        </div>
    );
};

export default Option;