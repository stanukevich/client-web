import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from "./components/AppRouter"
import './App.css';
import { React, createContext} from 'react';
import UserStore from './store/UserStore';

export const Context = createContext()

function App(){

  return (
    <Context.Provider value={{
      user: new UserStore()
    }}>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
