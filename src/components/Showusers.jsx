import React from 'react';

const Showuser = ({ title, first, last, large }) => (
  <div>
    <img alt="foto" src={large} />
    <h4>
      {title} {first} {last}
    </h4>
  </div>
);
export default Showuser;
