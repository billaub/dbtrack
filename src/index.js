import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import Popup from './components/Popup/Popup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Popup />, document.getElementById('root'));
registerServiceWorker();
