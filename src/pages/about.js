import React from 'react'
import NavigationBar from '../components/navbar'
import { useParams } from 'react-router-dom';
import { movie_detail_http, api_key } from '../api/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moviedetail from '../components/moviedetail';
import Trailer from '../components/trailer';
import { Container, Row } from 'react-bootstrap';
import Recommendation from '../components/recommendation';


const Aboutpage = () => {
    const param = useParams();
    const movieId = param.id;
    const [movieInfo, setMovieInfo] = useState([]);


    useEffect(() => {
        axios.get(`${movie_detail_http}/${movieId}?api_key=${api_key}`).then(res=>{
            setMovieInfo(res.data);
        })
    },[movieId])
   

  return (
    <div>
        <NavigationBar/>
        <Container className='m-0 p-0 backg' fluid>
                <Moviedetail movie={movieInfo}/>
            <Row>
                <Trailer movie={movieInfo}/>
            </Row>
            <Row>
                <Recommendation movie={movieInfo}/>
            </Row>
        </Container>
    </div>
  )
}

export default Aboutpage