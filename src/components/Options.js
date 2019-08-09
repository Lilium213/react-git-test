import React from "react";
import Option from "./Option";

const Options = (props) => {
    const options = props.options.map((option) => <Option  key={option} option={option} handleDeleteOption={props.handleDeleteOption} />);
    return (
        <div>
            <ol>
                {options}
            </ol>
            {props.options.length === 0 && <p>Please add some options</p>}

            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

export default Options;