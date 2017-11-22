import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatApp from './body/ChatApp.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<ChatApp />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
