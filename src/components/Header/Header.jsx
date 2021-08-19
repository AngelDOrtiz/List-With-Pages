/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header >
      <div style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <h1>List Of Villagers</h1>
        <Link to={'/'}>Home</Link>
      </div>
    </header>

  );
};

export default Header;
