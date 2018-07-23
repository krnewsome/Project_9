import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchButton = props => {

  //hideButton function
  const hideButton = () => {
    this.setState({
      isHidden: true,
    });
  };

  return(
    <ul>
       <li onClick={this.hideButton}><NavLink to={`/searchResults`}>Search</NavLink></li>
    </ul>
  );//end of return
};//end of searchButton component


export default SearchButton;
