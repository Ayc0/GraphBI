import React from 'react';
import ReactDOM from 'react-dom';

import 'react-select/dist/react-select.css';

import registerServiceWorker from './registerServiceWorker';

import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
