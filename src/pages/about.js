import React from 'react'
import { useParams } from 'react-router-dom';
import { movie_detail_http, api_key } from '../api/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moviedetail from '../components/moviedetail';
import Trailer from '../components/trailer';
import { Col, Container, Row } from 'react-bootstrap';
import Recommendation from '../components/recommendation';
import Streaming from '../components/streaming';


const Aboutpage = () => {
    const param = useParams();
    const movieId = param.id;
    const [movieInfo, setMovieInfo] = useState([]);
    useEffect(() => {
        axios.get(`${movie_detail_http}/${movieId}?api_key=${api_key}`).then(res=>{
            setMovieInfo(res.data);
        })
        window.scrollTo(0, 0);
    },[movieId])
    return (
        <Container className='backg' fluid>
            <Row>
                <Col className='px-0'>
                    <Moviedetail movie={movieInfo}/>
                </Col>
            </Row>
            <Streaming />
            <Trailer movie={movieInfo}/>
            <Recommendation movie={movieInfo}/>
        </Container>
    )
}

export default Aboutpage