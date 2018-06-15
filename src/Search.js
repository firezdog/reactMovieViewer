import React, {Component} from 'react';
import './App.css';
import $ from '../node_modules/jquery/dist/jquery.min'

class Search extends Component {

    onChange = (event) => {
        let term = event.target.value;
        let api_key = "44add8ac50210daef8b59669b0ec1368";
        let url = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${api_key}&page=1`
        let that = this;
        $.get(url, function(data){
            that.props.passData(data);
        })
    }

    render() {
        return (
        <div className="search">
            <input 
                onChange = {(event) => this.onChange(event)}
                placeholder="Enter search term." 
                className="searchInput" 
                type="text" />
            <span className="fas fa-search fa-2x"></span>
        </div>
        )
    }

}

export default Search;