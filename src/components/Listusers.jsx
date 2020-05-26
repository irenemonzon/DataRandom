import React from 'react';
import Showuser from './Showusers';

const Listuser = ({ users }) =>
  users.map(({ uuid, title, first, last, large }) => (
    <Showuser
      key={uuid}
      title={title}
      first={first}
      last={last}
      large={large}
    />
  ));
export default Listuser;
