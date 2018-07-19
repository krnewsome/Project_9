import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import {Route, NavLink} from 'react-router-dom';

const handleButton = () => {
  console.log('works')
  window.location.reload();

}

const Gallery = props => {
console.log(props)
  const results = props.data;
  let photos;

  if (results.length >0){
    photos = results.map(photo =>
      <Photo
        serverID={photo.server}
        farmID={photo.farm}
        id={photo.id}
        secret={photo.secret}
        key={photo.id}
      />
    );
  } else {
    photos = <NotFound />
  }

  return (
    <div className="photo-container">
    <nav className="main-nav">
      <ul>
        <li className="backbutton" onClick={handleButton}><NavLink to={`/`}>Back</NavLink></li>
      </ul>
    </nav>
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
};


export default Gallery
