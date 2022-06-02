import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import './utils/variables.scss'
import {store} from './redux-modules/store'
import {Provider} from 'react-redux'

const render = () => {
    const container = document.querySelector('#root');

    if (container) {
        const root = createRoot(container);

        root.render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    } else {
        // eslint-disable-next-line no-console
        console.info('root element could not be found');
    }
};

render();
