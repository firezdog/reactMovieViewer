import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

class App extends Component {

  constructor(props){
    super(props);
    
    const data = [
      {
        id: 0,
        poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        title: "The Avengers",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        id: 1,
        poster_src:  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        title: "Superfly",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        id: 2,
        title: "The Wizard of Oz",
        poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }      
    ];

    let movies = [];
    data.forEach(movie => movies.push(<Movie movie={movie}/>));
    this.state = {movies: movies};

  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td><img width="50px" src="green_app_icon.svg" alt="green icon"/></td>
              <td width="8px"></td>
              <td><h1>MoviesDB Search</h1></td>
            </tr>
          </tbody>
        </table>
        <div className="search">
          <input placeholder="Enter search term." className="searchInput" type="text" />
          <span className="fas fa-search fa-2x"></span>
        </div>
        {this.state.movies}
      </div>
    );
  }
}

export default App;
