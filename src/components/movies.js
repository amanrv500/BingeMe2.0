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
import { Row } from 'react-bootstrap';
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
                <Row key={idx} className="ms-1 pb-3">
                    <p className='genre ms-2 mb-3 mt-5'>
                        {item.name} Movies
                    </p>
                    <div className='movie-container'>
                        {/* <GrNext onClick={()=>{scroll(1700)}} className="right-btn"/>
                        <GrPrevious onClick={()=>{scroll(-1700)}} className="left-btn"/> */}
                        <Cards idx={item.id} />
                    </div>
                </Row>
            )
        })}
        </>  
   )
}

export default Movies;