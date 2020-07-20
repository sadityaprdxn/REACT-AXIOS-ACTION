import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useLocation, useHistory, useParams } from 'react-router-dom';

const initialstate = {
    loading: true,
    isError: false,
    data: {}
}

const movieDataReducer = (state, action) => {
    switch (action.type) {
        case 'LOADED':
            return {
                loading: false,
                isError: false,
                data: action.payload
            }
        case 'ERROR':
            return {
                loading: false,
                isError: true,
                data: action.payload
            }
        default:
            return state
    }
}

const Moviedetail = () => {

    const [state, dispatch] = useReducer(movieDataReducer, initialstate);
    const {id} = useParams();

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b4803476184cb34c231d8f2f07da0bc7&language=en-US`)
            .then((response) => {
                dispatch({
                    type: 'LOADED',
                    payload: response.data
                });
            }).catch(() => {
                dispatch({
                    type: 'ERROR',
                    payload: {}
                });
            })
    }, []);

    return (
        <>
        {
            state.loading ?
                (<h5 className="loading">loading</h5>) :

                state.isError ?
                    (<h5 className="error">error</h5>) :

                    (
                        <>
                            <section className="detail-banner">
                                <div className="wrapper">
                                <figure>
                                    <img src={`https://image.tmdb.org/t/p/w92${state.data.backdrop_path}`} alt="banner"/>
                                </figure>
                                <div className="movie-name" >
                                    <h4 className="name">{state.data.original_title}</h4>
                                    <span className="tagline">{state.data.tagline}</span>
                                </div>
                                </div>
                            </section>
                            
                            <section className="movie-details">
                                <div className="wrapper">
                                    <h5>overview</h5>
                                    <p className="overview">{state.data.overview}</p>
                                </div>
                            </section>
                        </>
                    )
        }
        </>
    )
}

export default Moviedetail;
