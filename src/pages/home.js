import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap'
import Movies from '../components/movies'
import NavigationBar from '../components/navbar'
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    let Navigate  = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=f0ac35b7b3bac44b4c7103bb2dd64991").then(res=>{
        console.log(res.data.results);
        setMovies(res.data.results);
    })
    }, []);

  return (
    <div>
        <NavigationBar  />
        <Container className='backg w-100 h-100 mb-0' fluid>
            <Row>
                <Carousel className='carousel'>
                    {movies.map((item, idx) => {
                        return (
                            <Carousel.Item key={idx} interval={8000} onClick={()=>Navigate(`/${item.id}`)} className="carousel-item">
                                <img
                                className="d-block w-100"
                                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.overview}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Row>
            <Movies />
        </Container>
    </div>
  )
}

export default Homepage