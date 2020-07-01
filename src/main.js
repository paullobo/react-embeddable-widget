import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/Widget/Widget';
import Config from './config';

const widgetName = Config.name;
const widgetElementName = `${widgetName}-ele`;

function app(window) {
    console.log(`${widgetName} loaded`);

    // Creating a tag for widget to render
    const widgetElement = document.createElement(widgetElementName);
    
    // Inserting the widget tag into body
    document.body.appendChild(widgetElement);

    // Rendering components dynamically into widget tag
    ReactDOM.render(<Widget/>, document.getElementsByTagName(widgetElementName)[0]);
}

app(window);

export default app;
