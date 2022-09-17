import React from 'react'
import "../styles/content.css"
import { api_key,
        genres_list_http,
        movie_genres_http,
        img_url
 } from '../api/api';
import { useState, useEffect, useRef } from 'react';
import {GrPrevious,GrNext} from 'react-icons/gr'
import { img1, img2, img3, img4, img5, img6, img7, img8 } from '../assets';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Stack, Card, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const Content = () => {
    const ref = useRef(null);
    const scroll = (offset) => {
        console.log(ref.current)
        ref.current.scrollLeft += offset;
    };
    const [genre, setGenre] = useState([]);
    const [movielist, setMovielist] = useState([]);
    const [getid, setGetid] = useState(null);
    let Newarray = [];

    useEffect(() => {
        axios.get(`${genres_list_http}api_key=${api_key}`)
        .then(res=>{
            setGenre(res.data.genres);
        })
    }, [])

    console.log(genre);
    const  cards = async (id) => {
        const newdata = await axios.get(`${movie_genres_http}`,{
            params: {
                api_key: api_key,
                with_genres: id,
                page: Math.floor(Math.random() * 3) + 1
            }
            }).then(res=>{
                console.log(res.data.results);
                const response = res.data.results;
        })
        return newdata;
    }
    //get movies from genre
    const getMovies = (id) => {
        axios.get(`${movie_genres_http}`,{
            params: {
                api_key: api_key,
                with_genres: id,
                page: Math.floor(Math.random() * 3) + 1
            }
            }).then(res=>{
                console.log(res.data.results);
                const response = res.data.results;
                setMovielist(response);
        })
    }
    

 

    // useEffect(() => {
    //   getMovielist(getid);
    // }, [getid])
   

 

    // const makeCards = (id, data) => {
    //     data.forEach((item, i) => {
    //         if(item.backdrop_path == null){
    //             item.backdrop_path = item.poster_path;
    //             if(item.backdrop_path == null){
    //                 return;
    //             }
    //         }
    //         movieContainer.innerHTML += `
    //         <div class="movie" onclick="location.href = '/${item.id}'">
    //             <img src="${img_url}${item.backdrop_path}" alt="">
    //             <p class="movie-title">${item.title}</p>
    //         </div>
    //         `;
    //         if(i == data.length - 1){
    //             setTimeout(() => {
    //                 setupScrolling();
    //             }, 100);
    //         }
    //     })
    // }
    // const setupScrolling = () => {
    //     const conainter = [...document.querySelectorAll('.movie-container')];
    //     const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    //     const preBtn = [...document.querySelectorAll('.pre-btn')];
    
    //     conainter.forEach((item, i) => {
    //         let containerDimensions = item.getBoundingClientRect();
    //         let containerWidth = containerDimensions.width;
    
    //         nxtBtn[i].addEventListener('click', () => {
    //             item.scrollLeft += containerWidth;
    //         })
    
    //         preBtn[i].addEventListener('click', () => {
    //             item.scrollLeft -= containerWidth;
    //         })
    //     })
    // }
   

  return (
    <Container className='backg w-100 h-100 mb-0' fluid>
        <Row>
            <br/>
            <p className='title ms-3 mb-0 pb-0'>
                Bingeme
            </p>
            <p className='slogan ms-3 mt-0 pt-0'>
                Because entertainment leads to a healthy life
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
        </Row>
        {genre.map(item=>{
            const {id,name} = item;
            let MovieArray = cards(id);
            return(
                <Row key={id}>
                    <p className='genre ms-3 mb-3 mt-5'>
                        {name} Movies
                    </p>
                    <div className='movie-container'>
                        <GrNext onClick={()=>{scroll(1700)}} className="right-btn"/>
                        <GrPrevious onClick={()=>{scroll(-1700)}} className="left-btn"/>
                        {MovieArray.map(films=>{
                            if(films.backdrop_path == null){
                                films.backdrop_path = films.poster_path;
                                if(films.backdrop_path == null){
                                    return;
                                }
                            }
                            return(
                                <div className='movie' key={films.id}>
                                    <img  src={`${img_url}${films.backdrop_path}`}/>
                                    <p className='movie-title"'>
                                        {films.title}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Row>
            )
        })}
    </Container>
  )
}

export default Content;

    {/* <Row >
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row> */}

        {/* <Row className='mb-5'>
            <p className='genre ms-3'>
                Action
            </p>
            <Carousel className='m-0' style={{ height: 200 }} indicators={false} interval={null}>
                {reviews.map((_id,name,img)=>(
                     <Carousel.Item style={{ height: 200 }} className="m-0 p-0">
                     <Stack
                       direction="horizontal"
                       className="h-100 justify-content-center align-items-center"
                       gap={3}
                     >
                       <Col className='moviecard' key={_id}>
                           <img
                                className="d-block w-100"
                                src={img}
                                alt="Second slide"
                            />
                            <p>
                                {name}d
                            </p>
                       </Col>
                       <Col className='moviecard' key={_id}>
                           <img
                                className="d-block w-100"
                                src={img}
                                alt="Second slide"
                            />
                            <p>
                                {name}d
                            </p>
                       </Col>
                       <Col className='moviecard' key={_id}>
                           <img
                                className="d-block w-100"
                                src={img}
                                alt="Second slide"
                            />
                            <p>
                                {name}d
                            </p>
                       </Col>
                       <Col className='moviecard' key={_id}>
                           <img
                                className="d-block w-100"
                                src={img}
                                alt="Second slide"
                            />
                            <p>
                                {name}d
                            </p>
                       </Col>
                     </Stack>
                      <Stack>
                     <Col >
                     <Card className='moviecard'>
                         <Card.Body>
                           <p>
                            {name}
                           </p>
                         </Card.Body>
                       </Card>
                     </Col>
                     <Col >
                     <Card className='moviecard'>
                         <Card.Body>
                           <p>
                            {name}
                           </p>
                         </Card.Body>
                       </Card>
                     </Col>
                     <Col >
                     <Card className='moviecard'>
                         <Card.Body>
                           <p>
                            {name}
                           </p>
                         </Card.Body>
                       </Card>
                     </Col>
                     <Col >
                     <Card className='moviecard'>
                         <Card.Body>
                           <p>
                            {name}
                           </p>
                         </Card.Body>
                       </Card>
                     </Col>
                     </Stack> 
              </Carousel.Item>
                ))}
            </Carousel>
        </Row> */}