import React, { useState } from 'react'
import axios from 'axios'
import { movie_genres_http, api_key, img_url } from '../api/api'


const Cards = (props) => {
    const [movielist, setMovielist] = useState([]);
    axios.get(`${movie_genres_http}`,{
        params: {
            api_key: api_key,
            with_genres: props.idx,
            page: Math.floor(Math.random() * 3) + 1
        }
        }).then(res=>{
            console.log(res.data.results);
            const response=res.data.result;
            setMovielist(response);
    })
    console.log(movielist);
    movielist.forEach(item=>{
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return;
            }
        }
        return(
            <div className='movie' key={item.id}>
                <img  src={`${img_url}${item.backdrop_path}`}/>
                <p className='movie-title"'>
                    {item.title}
                </p>
            </div>
        )
    })
}

export default Cards