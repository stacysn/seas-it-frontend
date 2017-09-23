import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

$(document).ready(function(){
  $(".button-collapse").sideNav();
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
