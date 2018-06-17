import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'
import Search from './Search.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {movies:[]};
  }

  receiveData = (data) => {
    let movies = this.state.movies;
    movies.length = 0;

    data.results.map(item => movies.push({
      id: item.id,
      title: item.title,
      description: item.overview,
      poster_src: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
    }));

    this.setState({movies:movies}); 
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td><img width="50" src="green_app_icon.svg" alt="green icon"/></td>
              <td width="8px"></td>
              <td><h1>MoviesDB Search</h1></td>
            </tr>
          </tbody>
        </table>
        <Search passData={this.receiveData}/>
        {this.state.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    );
  }
}

export default App;
