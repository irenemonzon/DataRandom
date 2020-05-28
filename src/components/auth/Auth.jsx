/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import 'firebase/firebase-auth';
import { useFirebaseApp, useUser } from 'reactfire';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from '@material-ui/core';

import Listuser from '../views/Listusers';
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

  return (
    <div className="container-info">
      {!user && (
        <div className="container-login">
          <div className="info-login">
            <FormControl>
              <InputLabel htmlFor="email"> Correo Electrónico</InputLabel>
              <Input
                id="email"
                type="email"
                aria-describedby="email-helper"
                onChange={event => setEmail(event.target.value)}
              />
              <FormHelperText id="email-helper">Tu email</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="pwd">Contraseña</InputLabel>
              <Input
                id="pwd"
                type="password"
                aria-describedby="pasword-helper"
                onChange={event => setPassword(event.target.value)}
              />
              <FormHelperText id="password-helper">
                Minimo 6 caracteres
              </FormHelperText>
            </FormControl>
            <div className="container-button">
              <Button variant="contained" color="primary" onClick={register}>
                Registrarse
              </Button>
              <Button variant="contained" color="primary" onClick={login}>
                Iniciar Sesion
              </Button>
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
