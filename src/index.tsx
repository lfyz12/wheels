import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WheelsStore} from "./store/WheelsStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface State {
    wheelStore: WheelsStore
}

export const wheelStore = new WheelsStore()

export const Context = createContext<State>({
    wheelStore
})

root.render(
  <Context.Provider value={{
      wheelStore
  }}>
    <App />
  </Context.Provider>
);


