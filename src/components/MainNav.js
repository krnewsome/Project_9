/*---------- IMPORT ----------*/

import React from 'react';
import { NavLink } from 'react-router-dom';

/*---------- MAINNAV COMPONENT----------*/

const MainNav = () => (
  <div >
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to={`/Cats`} activeStyle={{ background: 'orange' }} activeClassName="active">Cats</NavLink></li>
        <li><NavLink to={`/Dogs`} activeStyle={{ background: 'green' }}>Dogs</NavLink></li>
        <li><NavLink to={`/Fish`}>Fish</NavLink></li>
      </ul>
    </nav>
  </div>
);


/*---------- EXPORTS ----------*/

export default MainNav;
