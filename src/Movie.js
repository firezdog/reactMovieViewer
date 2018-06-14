import React, { Component } from 'react';
import './App.css';

class Movie extends Component {

    constructor(props){
        super(props);
        this.state = {movie: this.props.movie};
    }

    render(){
        var movie = this.state.movie;
        return(
            <div className="movie" key={movie.id}>
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