import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header.jsx';
import App from './App';
import Footer from './components/footer/footer.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('headerDefault'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footerDefault'));
registerServiceWorker();
