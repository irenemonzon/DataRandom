import React, { useState, useEffect } from 'react';
import 'firebase/firebase-auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Listuser from '../Listusers';
import Getuser from '../../services/Getuser';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebaseApp();
  const user = useUser();

  // register
  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  // login
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
  // logout
  const logout = async () => {
    await firebase.auth().signOut();
  };
  const [users, setUser] = useState([]);

  useEffect(() => {
    Getuser().then(users => setUser(users));
  }, []);

  return (
    <div>
      {!user && (
        <div className="navbar-login">
          <label htmlFor="email">Correo Electronico </label>
          <input
            type="email"
            id="email"
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={event => setPassword(event.target.value)}
          />
          <button type="button" onClick={submit}>
            Registrarse
          </button>
          <button type="button" onClick={login}>
            Iniciar Sesion
          </button>
        </div>
      )}
      {user && (
        <div>
          <Listuser users={users} />
          <button type="button" onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};
export default Auth;
