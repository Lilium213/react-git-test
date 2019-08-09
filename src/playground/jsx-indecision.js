import React from 'react';
import ReactDOM from 'react-dom';
import './playground/es6-classes-1';

const app = {
    title: 'React App',
    subtitle: 'Appropriate subtitle',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if(option){
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onChooseForMe = () => {
    const randomNum = Math.floor((Math.random()*app.options.length));
    const option = app.options[randomNum];
    alert(option);
};

const renderApp= () => {
    const template = (
        <div id="template">
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are the options' : 'There are no options'}</p>
            <p>Number of options: {app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onChooseForMe}>Want me to choose for you?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>Item {option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
};

renderApp();
