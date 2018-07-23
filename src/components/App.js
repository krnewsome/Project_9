/*---------- IMPORT ----------*/

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import NotFound from './NotFound';
import axios from 'axios';
import Gallery from './Gallery';
import apiKey from '../config';

/*--------- APP ---------*/
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        searchTag: '',
        searchTagCats: 'Cats',
        searchTagDogs: 'Dogs',
        searchTagFish: 'Fish',
        fish: [],
        cats: [],
        dogs: [],
        photos: [],
        loading: true,
      };//end of state
  };//end of constructor

  //call perform search functions to get photos for each category
  componentDidMount() {
    this.performSearch('Fish');
    this.performSearch('Cats');
    this.performSearch('Dogs');
  };


  //performSearch function 'axios'
  performSearch = (searchTag) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&content_type=&per_page=10&tags=${searchTag}&format=json&nojsoncallback=1`)
  .then(response => {
      if (searchTag === 'Cats') {
        this.setState({
          cats: response.data.photos.photo,
        });
      } else if (searchTag === 'Dogs') {
        this.setState({
          dogs: response.data.photos.photo,
        });
      }else if (searchTag === 'Fish') {
      this.setState({
          fish: response.data.photos.photo,
          loading: false,

        });
      } else {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          searchTag: searchTag,
        });
      }
    })//end of promise
    .catch(error => {
      console.log('Error fetching and parsing data');
    });//end of catch
  };//end of perform search

  render() {
    return (
    <BrowserRouter>
      <div className="app">
          <Switch>
            <Route exact path = '/' render = { () => <MainNav />}/>
            <Route path ='/fish' render ={()=> <Gallery data={this.state.fish} searchTag={this.state.searchTagFish}/>}/>
            <Route path ='/cats' render ={()=> <Gallery data={this.state.cats} searchTag={this.state.searchTagCats}/>}/>
            <Route path ='/dogs' render ={()=> <Gallery data={this.state.dogs} searchTag={this.state.searchTagDogs}/>}/>
            <Route exact path ='/searchResults' render ={()=>
                <div><SearchForm onSearch={this.performSearch} />
                <Gallery data={this.state.photos} /></div>
              }
            />
            <Route component={NotFound} />
          </Switch>
        <div className="gallery">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <p>Please search or select a category</p>
          }
        </div>
      </div>
    </BrowserRouter>
  );//end of return
  };//end of render
};//end of APP


/*---------- EXPORTS ----------*/

export default App;
