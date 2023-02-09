import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import { Carousel, Image, Button } from 'react-bootstrap'
import Movies from '../components/movies'
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    let Navigate  = useNavigate();
    const [movies, setMovies] = useState([]);
    const [showMore, setShowMore] = useState(false);
	const handleClick = () => {
	  setShowMore(!showMore);
	};

    useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=f0ac35b7b3bac44b4c7103bb2dd64991").then(res=>{
        console.log(res.data.results);
        setMovies(res.data.results);
    })
    }, []);

    return (
        <div className='backg'>
            <Carousel className='backg px-0 mx-0'>
                {movies.map((item, idx) => {
                    if(movies[idx].backdrop_path == null){
                        return null;
                    }
                    return (
                        <Carousel.Item key={idx} interval={4000}> 
                            <Image
                                onClick={()=>Navigate(`/${item.id}`)}
                                className="d-block  carousel-picture "
                                src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className=''>{item.title}</h3>
                                <div>
      		                        <p
        		                        style={{
          			                        height: showMore ? "auto" : "2em",
          			                        overflow: "hidden",
					                        width: '100%'
        		                        }}>
        			                    {item.overview}
      		                        </p>
      		                        <Button className='m-0 p-0 read-more text-white mb-2' variant="black"  onClick={handleClick}>
        		                        {showMore ? "Show Less" : "Read More"}
      		                        </Button>
    	                        </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}  
            </Carousel>
            <Movies />
        </div>
    )
}

export default Homepage