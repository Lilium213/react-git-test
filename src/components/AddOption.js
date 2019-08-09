import React from "react";


export default class AddOption extends React.Component{
    constructor(props){
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: ''
        };
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
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
                {this.state.error && <div>{this.state.error}</div>}
            </div>
        );
    }
}