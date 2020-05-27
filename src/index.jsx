import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import firebaseConfig from './firebase-config';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback="conectando a la app...">
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
