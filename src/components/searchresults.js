import axios from 'axios';
import React from 'react'
import { Col, Container, Row, Flex } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { SEARCHAPI } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Searchresults = () => {
    let Navigate  = useNavigate();
    const { query } = useParams();
    const [Result, setResult] = useState([])
  
    useEffect(() => {
        axios.get(`${SEARCHAPI} + ${query}`).then(res=>{
            console.log(res.data.results);
            setResult(res.data.results);
        })
    }, [query]);

    return (
        <Container fluid className='backg w-100'>
            <Row className='ps-4'>
                <Col className=''>
                    <p className='text-white fs-4 ms-4 mt-2'>Showing Results for <p className='fw-bolder fs-2' >{query}</p></p>
                </Col>
            </Row>
            <Row className='d-flex ps-5'>
                {Result.map((item, idx) => {
                    return (
                    <Col key={idx} className='border border-white rounded search p-0 m-3' lg={4} onClick={()=>Navigate(`/${item.id}`)}> 
                        <Image src={`https://image.tmdb.org/t/p/w780${item.poster_path}`} alt="poster" className='rounded'/>
                    </Col>
                )})}
            </Row>
        </Container>
    )
}

export default Searchresults;
