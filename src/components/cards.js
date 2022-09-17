import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { movie_genres_http, api_key, img_url } from '../api/api'
import { GrNext, GrPrevious } from 'react-icons/gr'


const Cards = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchMoviesListByGenres = (id, genres) => {
        axios.get(`${movie_genres_http}api_key=${api_key}&with_genres=${id}&page=${Math.floor(Math.random() * 3) + 1}`)
        .then(res=>{
            console.log(res.data.results);
            setMovies(res.data.results);
        }).catch(err =>  console.log(err));
    }

    useEffect(() => {
        fetchMoviesListByGenres(props.idx);
    }, [props.idx]);

    // const scroll = (direction) => {
    //     let element = document.getElementById('movie-container');
    //     element.scrollLeft += direction;
    // }

  

    return (
        <div className='movie-container' id='movie-container'>
            <GrNext  className="right-btn"/>
            <GrPrevious className="left-btn"/>
            {movies.map((item, idx) => {
                return (
                    <div className='movie-card' key={idx}>
                        <img src={`${img_url}${item.poster_path}`} alt={item.title} className='movie-img'/>
                        <p className='movie-title'>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards