import React from 'react';
import './App.css';
import { useFirebaseApp } from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return <div className="App">Configuracion</div>;
}

export default App;
