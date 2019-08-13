import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div className="options">
        <div className="options__header">
            <h3>Your Options</h3>
            <p onClick={props.handleDeleteOptions}>Remove All</p>
        </div>
        <ol className="options__list">
            {props.options.map((option) =>
                <Option  key={option} option={option} handleDeleteOption={props.handleDeleteOption} />
                )}
        </ol>

        {props.options.length === 0 && <div className="options--empty"><p>Please add some options</p></div>}
    </div>
);

export default Options;