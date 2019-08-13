import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handlePickOption = () => {
        const randomNum = Math.floor((Math.random()*this.state.options.length));
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option} ));
    };

    handleAddOption = (option) => {
        console.log(option);

        if(!option){
            return "Enter valid value";
        }else if(this.state.options.indexOf(option) > -1){
            return "Value already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((element) => element !== option)
        }));
    };

    handleClearSelection = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

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

    render() {
        const subtitle = 'Don\'t know what to do? Let me choose for you.';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>

                <OptionModal selectedOption={this.state.selectedOption} handleClearSelection={this.handleClearSelection} />
            </div>
        );
    }
}