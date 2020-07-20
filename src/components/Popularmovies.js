import React, { useReducer , useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Movielist from './Movielist';

const initialstate = {
    loading : true,
    isError : false,
    data : []
}

const movieDataReducer = (state, action) => {
    switch(action.type) {
        case 'LOADED':
            return {
                loading : false,
                isError : false,
                data : action.payload
            }
        case 'ERROR':
            return {
                loading : false,
                isError : true,
                data : action.payload
            }
        default:
            return state
    }
}

const Popularmovies = () => {

    const [state, dispatch] = useReducer(movieDataReducer, initialstate);

    useEffect(() => {
        
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b4803476184cb34c231d8f2f07da0bc7&language=en-US&page=1')
        .then((response) => {
            dispatch({
                type : 'LOADED',
                payload : response.data.results
            });
        }).catch(() => {
            dispatch({
                type : 'ERROR',
                payload : []
            });
        })
    }, []);

    return (
        <section className="popular-movies">
            <div className="wrapper">
            <h2>popular movies</h2>
            <ul className="movies-list">
                {
                    state.loading ?
                    (<li className="loading">loading</li>) :

                    state.isError ? 
                    (<li className="error">error</li>) :

                    state.data.map(({original_title, overview, release_date, backdrop_path, poster_path, id}) => {
                        return (
                        <Movielist
                            key = {id}
                            id = {id}
                            title = {original_title}
                            overview = {overview}
                            releasedate = {release_date}
                            banner = {backdrop_path}
                            poster = {poster_path}
                        />)
                    })
                }
            
            </ul>
            </div>
        </section>
    );
}

export default Popularmovies;
