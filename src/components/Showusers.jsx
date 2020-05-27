import React, { useState } from 'react';
import Listuser from './Listusers';

const Showuser = ({ value, users }) => {
  const {
    age,
    number,
    name,
    phone,
    cell,
    medium,
    email,
    gender,
    title,
    first,
    last
  } = value;

  const [close, setClose] = useState(true);

  return (
    <div className="container-items">
      {close ? (
        <div>
          <img alt="foto" src={medium} />
          <h4>
            {title} {first} {last}
          </h4>
          <p>Edad: {age} años</p>
          <p>Genero: {gender}</p>
          <p> Email: {email}</p>
          <p>Telefono: {phone}</p>
          <p>Numero Celular: {cell}</p>
          <p>
            Direccion: {name} numero {number}
          </p>
          <button type="button" onClick={() => setClose(false)}>
            x
          </button>
        </div>
      ) : (
        <Listuser users={users} />
      )}
    </div>
  );
};
export default Showuser;
