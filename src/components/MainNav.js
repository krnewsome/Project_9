/*---------- IMPORT ----------*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { handleButton } from './Gallery';
import SearchButton from './SearchButton';

/*---------- MAINNAV COMPONENT----------*/

const MainNav = () => (
  <div >
    <nav className="main-nav">
      <ul>
        <SearchButton />
        <li onClick={handleButton}><NavLink exact to={`/Cats`} activeStyle={{ background: 'green' }} activeClassName="active">Cats</NavLink></li>
        <li onClick={handleButton}><NavLink to={`/Dogs`} activeStyle={{ background: 'orange' }}>Dogs</NavLink></li>
        <li onClick={handleButton}><NavLink to={`/Fish`}>Fish</NavLink></li>
      </ul>
    </nav>
  </div>
);//end of mainNav


/*---------- EXPORTS ----------*/

export default MainNav;
