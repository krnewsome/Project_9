/*---------- IMPORTERS ----------*/

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Gallery from './components/Gallery';
/*--------- CONTAINER ---------*/
class App extends Component {
  render() {
    return (
      <div className="container">
      <SearchForm />
        <MainNav />

        <Gallery />

      </div>
    );
  }
}

export default App;
