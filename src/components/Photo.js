/*---------- IMPORT COMPONENT----------*/

import React from 'react';


/*---------- PHOTO COMPONENT----------*/

const Photo = props => (
  <li className="photo-wrap">
    <img src={`https://farm${props.farmID}.staticflickr.com/${props.serverID}/${props.id}_${props.secret}.jpg`
} alt=""/>
  </li>
);//end of Photo component


/*---------- EXPORTS ----------*/

export default Photo;
