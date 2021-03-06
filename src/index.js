import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
