import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import incrementNumber from './components/actions';
import rootReducer from './components/reducers';

const store = createStore(rootReducer);

store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(incrementNumber(store.getState));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

