/*---------- IMPORT----------*/

import React from 'react';
import Cone404 from '../images/Cone404.jpg';
import { handleButton } from './Gallery';
import { Link } from 'react-router-dom';


/*---------- NOTFOUND COMPONENT----------*/

const NotFound = () => (
    <ul>
      <li className="backbutton" onClick={handleButton}><Link to={`/`}>Back</Link></li>
      <li className="not-found">
        <img src= {Cone404} alt="404 error"/>
      </li>
    </ul>
);//end of NotFound


/*---------- EXPORTS ----------*/

export default NotFound;
