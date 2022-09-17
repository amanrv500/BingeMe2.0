import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { movie_genres_http, api_key, img_url } from '../api/api'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'


const Cards = (props) => {
    let Navigate  = useNavigate();
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

    return (
        <div className='movie-container' id='movie-container'>
            <GrNext size={30} className="nxt-btn"/>
            <GrPrevious size={30} className="pre-btn"/>
            {movies.map((item, idx) => {
                if(item.backdrop_path == null){
                    item.backdrop_path = item.poster_path;
                    if(item.backdrop_path == null){
                        return;
                    }
                }
                return (
                    <div className='movie me-3' key={idx} onClick={()=>Navigate(`/${item.id}`)}>
                        <img src={`${img_url}${item.backdrop_path}`}  alt={item.title} className='movie-img'/>
                        <p className='movie-title'>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards