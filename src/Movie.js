import React, { Component } from 'react';
import './App.css';

class Movie extends Component {

    render(){
        var movie = this.props.movie;
        return(
            <div className="movie">
                <table>
                    <tbody>
                        <tr>
                            <td className="movie-logo">
                                <img src={movie.poster_src} alt="movie" />
                            </td>
                            <td>
                                <h3>{movie.title}</h3>
                                <p>{movie.description}</p>
                                <button>Play</button>
                                <button>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Movie;