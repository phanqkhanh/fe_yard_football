import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesTeample/reduction.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ContextProvider } from './ContextProvider/contextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ContextProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ContextProvider>
    </Provider>,
);
