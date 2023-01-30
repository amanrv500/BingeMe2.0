import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { movie_detail_http, api_key, img_url } from '../api/api'
import { useNavigate } from 'react-router-dom'

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
        <div className="recommendations h-100 backg">
            <h1 className="heading mt-5 ms-3">
                {slogan}
            </h1>
            <div className="d-flex flex-wrap">
            {recommendation.map((item, idx) => {
                 if(recommendation[idx].backdrop_path == null){
                    return null;
                }
                return (
                    <div key={idx}>
                        <div className="movie-rec" onClick={()=>Navigate(`/${item.id}`)} >
                            <img src={`${img_url}/${item.backdrop_path}`} className="img-rec" alt=""/>
                            <p className="movie-t">
                                {item.title}
                            </p>
                        </div>
                    </div>
                 )
                
            })}
            </div>
        </div>
    )

}

export default Recommendation