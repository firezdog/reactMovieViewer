import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class Movie extends Component {

    viewMovie = () => {
        const movie_url = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
        window.location.href = movie_url;
    }

    viewPreview = () => {
        const movieId = this.props.movie.id;
        const api_key = "44add8ac50210daef8b59669b0ec1368";
        const api_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=44add8ac50210daef8b59669b0ec1368`
        $.get(api_url, (data) => {
            const movieKey = data.results[0].key;
            let preview_url = `https://www.youtube.com/watch?v=${movieKey}`;
            window.location.href = preview_url;
        })

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
                                <button
                                    onClick={() => this.viewPreview()} 
                                    className="btn btn-primary">
                                    Play
                                </button>
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