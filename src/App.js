import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    
    const data = [
      {
        id: 0,
        title: "The Avengers",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        id: 1,
        title: "Superfly",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        id: 2,
        title: "The Wizard of Oz",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }      
    ];

    var movies = [];

    data.forEach(movie => {
      var movieMarkup = 
      <div className="movie" key={movie.id}>
        <table>
          <tbody>
            <tr>
              <td className="movie-logo">
                <img src="" alt="movie" />
              </td>
              <td>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      movies.push(movieMarkup)})

    this.state = {movies: movies}


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
