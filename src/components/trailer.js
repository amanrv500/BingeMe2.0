import axios from 'axios'
import React from 'react'
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
    <div className="trailer-container h-100 backg">
        <h1 className="heading ms-3">
            Video Clips
        </h1>
        <div className="d-flex flex-wrap justify-content-start align-item-start flex-row">
        {trailer.map((item, idx) => {
            if(idx < maxClips){
                return (
                    <>
                        <iframe key={idx} className='ms-3 me-2' height="250px" width="425px" src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </>
                )
            }
        }
        )}
        </div>
    </div>
  )
}

export default Trailer