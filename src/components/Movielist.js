import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';

const Movielist = ({title, releasedate, banner, poster, id}) => {
    
    const history = useHistory();
    const liref = useRef();

    const movieDetail = () => {
        history.push(`/${liref.current.getAttribute('data-uniqueid')}`)
    }

  return (
    <li data-uniqueid={id} ref={liref} onClick={movieDetail}>
        <div className="movie-posters">
            <figure>
                <img src={`https://image.tmdb.org/t/p/w92${banner}`} alt="banner-image"/>
            </figure>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w92${poster}`} alt="poster-image"/>
            </figure>
        </div>
        <div className="movie-details">
        <h3>{title.split("(")[0]}</h3>
            <ul>
                <li className="movie-release-date"> <span>{releasedate}</span> </li>
                <li className="movie-rating">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </li>
            </ul>
        </div>
    </li>
  );
}

export default Movielist;
