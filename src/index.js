// import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux'
import {store} from './redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <persistGate loading={null} persistor={persistor}> */}
    <Provider store={store} > 
    <App/>
    </Provider>
    {/* </persistGate> */}
  </React.StrictMode>
);
