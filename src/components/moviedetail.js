import React from 'react'
import { original_img_url } from '../api/api';

const Moviedetail = (props) => {

    const movieinfo = props.movie;
	console.log(props.movie);
	const title = movieinfo.title;
	if(movieinfo.backdrop_path == null){
        movieinfo.backdrop_path = movieinfo.poster_path;
    }
	const img = `url(${original_img_url}${movieinfo.backdrop_path})`;
	// const release_date = movieinfo.release_date.split('-')[0];
	// const genres = () => {
	// 	let genre = [];
	// 	movieinfo.genres.map((item) => {
	// 		genre.push(item.name);
	// 	});
	// 	return genre.join(', ');
	// };
	const overview = movieinfo.overview;
	const runtime = `${movieinfo.runtime} min`;
	const adult = movieinfo.adult ? '18+' : 'PG 13';

  return (
    <div className="movie-info d-block w-100" style={{ 
		backgroundImage: img, 
		width: '100%',
	  }}>
        <div className="movie-detail ">
            <h1 className="movie-name">{title}</h1>
            <p className="genres" >
				{runtime} | {adult} 
			</p>
            <p className="des">
				{overview}
			</p>
            {/* <p className="starring">
				<span>
					Starring:
				</span>
			</p> */}
        </div>
    </div>
  )
}

export default Moviedetail