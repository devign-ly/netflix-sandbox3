import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import * as Devign from 'devigner';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { auth } from './lib/auth';
import { AuthContext } from './context/auth';

Devign.init();

render(
  <React.StrictMode>
    <AuthContext.Provider value={{ auth }}>
      <GlobalStyles />
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
