/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

import './styles/style.scss';
import App from './App';

render(
    () => <Router>
        <App />
    </Router>,
    document.getElementById('root') as HTMLElement
);
