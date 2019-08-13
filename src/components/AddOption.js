import React from "react";


export default class AddOption extends React.Component{
    state = {
        error: ''
    };

    constructor(props){
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error }));

        if(!error){
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    {this.state.error && <div className="error">{this.state.error}</div>}
                    <div className="add-option">
                        <input type="text" name="option"/>
                        <button className="button">Add option</button>
                    </div>

                </form>

            </div>
        );
    }
}