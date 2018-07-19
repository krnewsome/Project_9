/*---------- IMPORTERS ----------*/

import React from 'react';
import {
  BrowserRouter,
  Route, NavLink,
  Switch
} from 'react-router-dom';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import NotFound from './NotFound';
import axios from 'axios';
import Gallery from './Gallery';
import apiKey from '../config';


/*--------- CONTAINER ---------*/
class App extends React.Component {

  constructor() {
      super();
      this.state = {
        photos: [],
        fish: [],
        cats:[],
        dogs: [],
        loading: true,

      };
    }

    componentDidMount() {
      this.performSearch('fish');
      this.performSearch('cats');
      this.performSearch('dogs');

  }

  performSearch = (searchTag) => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&content_type=&per_page=10&tags=${searchTag}&format=json&nojsoncallback=1`)
    .then(response => {
      if(searchTag === 'cats'){
        this.setState ({cats: response.data.photos.photo
        })

      }else if (searchTag === 'dogs'){
        this.setState ({dogs: response.data.photos.photo
        })
      }else if (searchTag === 'fish'){
        this.setState ({fish: response.data.photos.photo
        })
      } else {
      this.setState({
        photos: response.data.photos.photo,
        loading: false,
        hideMainNav: true,

      });
    }
  })
  .catch( error => {
    console.log('Error fetching and parsing data');
  });
  }



  render() {

    return (
    <BrowserRouter>
      <div className="app">
        <nav className="main-nav">
          <ul>
            <li><NavLink to={`/searchResults`}>Search</NavLink></li>
          </ul>
        </nav>

          <Switch>
          <Route exact path = '/' render = { () =>  <MainNav /> }/>
          <Route path ='/fish' render ={()=> <Gallery data={this.state.fish}/>}/>
          <Route path ='/cats' render ={()=> <Gallery data={this.state.cats}/>}/>
          <Route path ='/dogs' render ={()=> <Gallery data={this.state.dogs}/>}/>
          <Route path ='/searchResults' render ={()=> <SearchForm onSearch={this.performSearch} />}/>
          <Route component={NotFound} />
          </Switch>
        <div className="gallery">
          {
            (this.state.loading)
            ? <p>Please search or select a category above</p>
            : <Gallery data={this.state.photos}/>
          }
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
