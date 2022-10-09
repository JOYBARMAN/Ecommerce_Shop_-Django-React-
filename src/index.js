import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {GlobalState}  from './state/provider';
import reducer,{initialState} from './state/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalState initialState={initialState} reducer={reducer}>
    <App />
  </GlobalState>
);

