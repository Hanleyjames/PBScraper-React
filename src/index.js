import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home/Home';
import * as serviceWorker from './serviceWorker';

let falseData = [
  {keyword: "Seattle Flowers", url: "https://www.seattlegrowers.com", email: "admin@seattlegrowers.com", phone: "425-330-3333"},
  {keyword: "Seattle Flowers", url: "https://www.thegarden.net", email: "admin@thegarden.net", phone: "425-333-3333"}
]


ReactDOM.render(<Home />, document.getElementById('root'));


serviceWorker.unregister();
