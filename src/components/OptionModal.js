import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelection}
        contentLabel="Selected option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <div>
            <h3>Selected option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelection}>Mm'kay</button>
        </div>

    </Modal>
);


export default OptionModal;