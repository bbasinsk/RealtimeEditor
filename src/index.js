import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RealTimeEditor from './RealTimeEditor.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RealTimeEditor />, document.getElementById('root'));
registerServiceWorker();
