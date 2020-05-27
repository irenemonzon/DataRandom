import React, { useState } from 'react';
import './Listuser.css';
import Showuser from './Showusers';
// import { Link } from 'react-router-dom';

const Listuser = ({ users }) => {
  const [info, setInfo] = useState(false);
  const [value, setValue] = useState({});

  const SendInfo = users => {
    setInfo(true);
    setValue(users);
  };
  /* if (info === true) {
    setTimeout(() => {
      setInfo(false);
    }, 5000);
  } */
  return (
    <div className="container-card">
      {info ? (
        <Showuser value={value} users={users} />
      ) : (
        <div className="container-card">
          {users.map(users => (
            <div className="card" key={users.uuid}>
              <button type="button" onClick={() => SendInfo(users)}>
                <img alt="foto" src={users.medium} />
              </button>
              <div>
                <h4 className="name-user">
                  {users.title} {users.first} {users.last}
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Listuser;
