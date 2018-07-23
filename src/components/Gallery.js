/*---------- IMPORT ----------*/

import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import SearchButton from './SearchButton';

//refresh page function
export function handleButton() {
  window.location.reload();
};


/*---------- GALLERY COMPONENT ----------*/

const Gallery = props => {
  const results = props.data;
  const searchTag = props.searchTag;
  let photos;

  if (results.length > 0) {
    photos = results.map(photo =>
      <Photo
        serverID={photo.server}
        farmID={photo.farm}
        id={photo.id}
        secret={photo.secret}
        key={photo.id}
      />
    );//end of map
  };//end of if

  return (
    <div className="photo-container">
      <MainNav />
      {
        (results.length !== 0)
        ? <div className="results">
            <h2>Showing Results for:</h2>
              <h3>{searchTag}</h3>
            <ul>
              {photos}
            </ul>
          </div>
        :
          <div className="notFound">
            <h2>No results found</h2>
            <p>That seach did not return any results, please try again.</p>
          </div>
      }
    </div>
  );//end of return
};//end of gallery component


/*---------- EXPORTS ----------*/

export default Gallery;
