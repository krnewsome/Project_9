/*---------- IMPORT ----------*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchButton from './SearchButton';

/*---------- MAINNAV COMPONENT----------*/

const MainNav = () => (
  <div >
    <nav className="main-nav">
      <ul>
        <SearchButton />
        <li><NavLink exact to={`/Cats`} activeStyle={{ background: 'green' }} activeClassName="active">Cats</NavLink></li>
        <li><NavLink to={`/Dogs`} activeStyle={{ background: 'orange' }}>Dogs</NavLink></li>
        <li><NavLink to={`/Fish`}>Fish</NavLink></li>
      </ul>
    </nav>
  </div>
);//end of mainNav


/*---------- EXPORTS ----------*/

export default MainNav;
