import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux need to be define before React.DO.render
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // We use provide to wrap our React APP to connect it with Redux
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
