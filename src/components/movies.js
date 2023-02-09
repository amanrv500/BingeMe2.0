import React from 'react'
import "../styles/content.css"
import {GrPrevious,GrNext} from 'react-icons/gr'
import Cards from './cards';
import genres from '../data/genres';


const Movies = () => {

   return(
        <>
        {genres.map((item, idx) => {
            return (
                <div key={idx} className="ms-4 backg">
                    <p className='fs-5 text-white mb-3 mt-5 fw-bolder'>
                        {item.name} Movies
                    </p>
                    <div className='movie-container'>
                        <Cards idx={item.id} />
                    </div>
                </div>
            )
        })}
        </>  
   )
}

export default Movies;