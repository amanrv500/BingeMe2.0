import axios from 'axios'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { movie_detail_http, api_key,  } from '../api/api'

const Trailer = (props) => {
    const movieinfo = props.movie;
    const id = movieinfo.id;
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        axios.get(`${movie_detail_http}/${id}/videos?api_key=${api_key}`).then(res=>{
            setTrailer(res.data.results);
        })
    }, [movieinfo])

    let maxClips = (trailer.length > 5) ? 4 : trailer.length;
   

  return (
    <>
    <Row className='mt-5'>
            <Col className='px-5'>
                <p className='text-white fs-3 fw-bolder'>Video Clips</p>
            </Col>
    </Row>
    <Row>
        <Col className="d-flex flex-wrap justify-content-start align-item-start flex-row px-5">
            {trailer.map((item, idx) => {
                if(idx < maxClips){
                    return (
                        <>
                            <iframe key={idx} className='me-4 mb-4 yt-clips' src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'  ></iframe>
                        </>
                    )
                }
            })}
        </Col>
    </Row>
    </>
  )
}

export default Trailer