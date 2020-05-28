import React from 'react';
import './Showusers.css';

const Showuser = ({ value }) => {
  const {
    age,
    number,
    name,
    phone,
    cell,
    large,
    email,
    gender,
    title,
    first,
    last
  } = value;

  return (
    <div className="container-items">
      <div className="items">
        <img alt="foto" src={large} />
        <h3>
          {title} {first} {last}
        </h3>
        <div className="info">
          <h4>Edad: {age} años</h4>
          <h4>Genero: {gender}</h4>
          <h4>Email: {email}</h4>
          <h4>Telefono: {phone}</h4>
          <h4>Numero Celular: {cell}</h4>
          <h4>
            Direccion: {name} numero {number}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Showuser;
