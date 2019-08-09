import React from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.onVisibilityChange = this.onVisibilityChange.bind(this);

        this.state = {
            visibility: false
        };

        this.data = 'This is the text that I will show';
    }

    onVisibilityChange() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.onVisibilityChange}>{this.state.visibility ? "Hide content" : "Show content"}</button>
                {this.state.visibility && <p>{this.data}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('extra'))
