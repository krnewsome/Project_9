import React from 'react';

const Photo = props => (
  <li className="photo-wrap">
    <img src={`https://farm${props.farmID}.staticflickr.com/${props.serverID}/${props.id}_${props.secret}.jpg`
} alt=""/>
  </li>
);

export default Photo;
