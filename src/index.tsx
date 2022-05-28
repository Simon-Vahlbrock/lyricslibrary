import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';

const render = () => {
    const container = document.querySelector('#root');

    if (container) {
        const root = createRoot(container);

        root.render(<App/>);
    } else {
        // eslint-disable-next-line no-console
        console.info('root element could not be found');
    }
};

render();
