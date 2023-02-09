import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { movie_detail_http, api_key, img_url } from '../api/api'
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const Recommendation = (props) => {
    let Navigate = useNavigate();
    const [recommendation, setRecommendation] = useState([]);
    const movieinfo = props.movie;
    const id = movieinfo.id;
    const [slogan, setSlogan] = useState("More Like This");

    useEffect(() => {
      axios.get(`${movie_detail_http}/${id}/recommendations?api_key=${api_key}`).then(res=>{
            setRecommendation(res.data.results);
            if(res.data.results.length === 0){
                setSlogan("No Recommendations Found");
            }
        })
    },[movieinfo])

    return (
        <>
            <Row>
                <Col className="text-white fs-2 fw-bolder mt-5 ms-5 ">
                    {slogan}
                </Col>
            </Row>
            <Row className="backg ms-4">
                {recommendation.map((item, idx) => {
                    if(recommendation[idx].backdrop_path == null){
                        return null;
                    }
                    return (
                        <Col key={idx} className=" border border-white rounded search p-0 m-3" lg={4} onClick={()=>Navigate(`/${item.id}`)}>
                            <Image src={`https://image.tmdb.org/t/p/w780${item.poster_path}`} alt="poster" className='rounded'/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )

}

export default Recommendation