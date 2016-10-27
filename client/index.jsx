import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/main.scss';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore(window.__data);
const root = document.getElementById('root');

root.classList.add(style.root);

ReactDOM.render(<Root store={store} />, root);
