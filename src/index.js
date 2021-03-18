import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// SASS
import './sass/app.sass'
// BOOTSTRAP 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// ICONS
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
