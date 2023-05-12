// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { React, createContext } from 'react';
// import UserStore from './store/UserStore';
// import { BrowserRouter } from 'react-router-dom';

// export const Context = createContext(null)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Context.Provider value={{user: new UserStore()}}>
//       <React.StrictMode>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </React.StrictMode>
//   </Context.Provider>
// );

import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
// import UserStore from './store/UserStore';

// export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);