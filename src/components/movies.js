import React from 'react'
import "../styles/content.css"
import { api_key,
        genres_list_http,
        movie_genres_http,
        img_url
 } from '../api/api';
import { useState, useEffect, useRef } from 'react';
import {GrPrevious,GrNext} from 'react-icons/gr'
import axios from 'axios';
import { Col, Row, Stack } from 'react-bootstrap';
import Cards from './cards';
import genres from '../data/genres';


const Movies = () => {
    // const [genres, setGenres] = useState([]);

    // useEffect(() => {
    //     axios.get(`${genres_list_http}api_key=${api_key}`)
    //     .then(res=>{
    //         console.log(res.data.genres);
    //         setGenres(res.data.genres);
    //     })
    // }, []);

   return(
        <>
        {genres.map((item, idx) => {
            return (
                <div key={idx} className="ms-4 backg">
                    <p className='fs-5 text-white mb-3 mt-5 fw-bolder'>
                        {item.name} Movies
                    </p>
                    <div className='movie-container'>
                        <Cards idx={item.id} />
                    </div>
                </div>
            )
        })}
        </>  
   )
}

export default Movies;