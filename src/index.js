import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import Popup from './components/Popup/Popup';
import Dashboard from './components/Dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';

const rootPopup = document.getElementById('root');
const dashboardRoot = document.getElementById('root-dashboard');

if (rootPopup) {
    ReactDOM.render(<Popup />, rootPopup);
}
else {
    ReactDOM.render(<Dashboard />, dashboardRoot);
}

registerServiceWorker();
