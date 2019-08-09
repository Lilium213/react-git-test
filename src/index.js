import React from 'react';
import ReactDOM from 'react-dom';
import './playground/counter-example';
import validator from 'validator';

console.log(validator.isEmail('sdsadsda.com'));

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        if(json){
            const options = JSON.parse(json);
            this.setState(() => ({options: options}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((element) => element !== option)
        }));
    }

    handlePickOption() {
        const randomNum = Math.floor((Math.random()*this.state.options.length));
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        console.log(option);

        if(!option){
            return "Enter valid value";
        }else if(this.state.options.indexOf(option) > -1){
            return "Value already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {
        const subtitle = 'Don\'t know what to do? Let me choose for you.';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do?</button>
        </div>
    );
};

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

const Option = (props) => {
    return (
        <div>
            <li>{props.option}</li>
            <button onClick={() => {props.handleDeleteOption(props.option)}}>Eliminar</button>
        </div>
    );
};

class AddOption extends React.Component{
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

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));