/*---------- IMPORT ----------*/

import React from 'react';
import { NavLink } from 'react-router-dom';


/*---------- SEARCHBUTTON COMPONENT ----------*/

const SearchButton = props => {

  return (
    <ul>
       <li><NavLink to={`/searchResults`}>Search</NavLink></li>
    </ul>
  );//end of return
};//end of searchButton component


/*---------- EXPORTS----------*/

export default SearchButton;
