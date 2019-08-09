import React from "react";

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do?</button>
        </div>
    );
};

export default Action;