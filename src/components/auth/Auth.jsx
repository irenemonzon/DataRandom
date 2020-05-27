/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import 'firebase/firebase-auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Listuser from '../Listusers';
import Getuser from '../../services/Getuser';
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();
  // const [error, setError] = useState(false);

  // register
  const register = async () => {
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

  // if (email === '' || password === '') {
  // setError(true);
  // }

  return (
    <div className="container-info">
      {!user && (
        <div className="container-login">
          <div className="info-login">
            <p>Correo Electronico </p>
            <input
              type="email"
              id="email"
              onChange={event => setEmail(event.target.value)}
            />
            <p>Contraseña</p>
            <input
              type="password"
              id="password"
              onChange={event => setPassword(event.target.value)}
            />
            <div className="container-button">
              <button type="button" onClick={register}>
                Registrarse
              </button>
              <button type="button" onClick={login}>
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="container-user">
          <div className="title">
            <p>{user.email}</p>
            <button type="button" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
          <div className="user">
            <Listuser users={users} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Auth;
