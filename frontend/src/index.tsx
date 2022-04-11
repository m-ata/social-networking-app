import * as React from 'react';
import { render } from 'react-dom';
import AppRouter from './Routing'
import { Provider } from "react-redux";
import { store } from './redux/store';

render(<Provider store={store}>
    <AppRouter />
</Provider>, document.getElementById('root'));