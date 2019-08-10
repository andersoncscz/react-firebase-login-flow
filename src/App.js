import * as React from 'react';
import Routes from './pages/Routes';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';

import rootReducer from './store/reducers';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default App;
