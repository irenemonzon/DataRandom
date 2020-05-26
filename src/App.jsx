import React from 'react';
import './App.css';
import { useUser } from 'reactfire';

import Auth from './components/auth/Auth';

function App() {
  const user = useUser();

  return (
    <div className="App">
      {user && (
        <p>
          Usuario:
          {user.email}
        </p>
      )}
      <Auth />
    </div>
  );
}

export default App;
