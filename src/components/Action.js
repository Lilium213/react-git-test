import React from "react";

const Action = (props) => (
    <div className="action">
        <button className="button button--big" disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do?</button>
    </div>
);

export default Action;