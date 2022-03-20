// First file to be listened by Application (Don't change this file!)
import React from 'react'; // Importando o React.js
import ReactDOM from 'react-dom'; // Importando o DOM do React.js
import './index.css'; // Just one Stylesheet file to execute the default front-end of your Application
import App from './App'; // The second file to be listened (Main file of your Web Application, There are the changes and updates area)

ReactDOM.render( // renderizando a aplicação React.js no DOM (Document Object Model)
  <React.StrictMode> {/* Chamando o App.js para dentro do renderizador */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // renderizando no <div id='root'></div> no ./public/index.html
);