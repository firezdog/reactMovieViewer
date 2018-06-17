import React, { Component } from 'react';
import './App.css';

class Movie extends Component {

    viewMovie = () => {
        const movie_url = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
        window.location.href = movie_url;
    }


    render(){
        var movie = this.props.movie;
        return(
            <div className="movie">
                <table>
                    <tbody>
                        <tr>
                            <td className="movie-logo">
                                <img width="200" height="300" src={movie.poster_src} alt="movie" />
                            </td>
                            <td>
                                <h3>{movie.title}</h3>
                                <p>{movie.description}</p>
                                <button className="btn btn-primary">Play</button>
                                <button 
                                    onClick={() => this.viewMovie()}
                                    className="btn btn-info">
                                    View
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Movie;