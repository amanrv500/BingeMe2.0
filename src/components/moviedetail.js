import React, { useEffect } from 'react'
import axios from 'axios'
import { original_img_url, api_key2, omdb_movie_info } from '../api/api';
import { Image } from 'react-bootstrap';
import { stringify } from 'querystring';

const Moviedetail = (props) => {
    const movieinfo = props.movie;
	const imdb_id = String(`${movieinfo.imdb_id}`);
	console.log(imdb_id);

	const getData = () => {
		axios.get(`http://www.omdbapi.com/?apikey=394c72e4&i=${imdb_id}`).then(res => {
			console.log(res.data);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	const runtime = movieinfo.runtime;
	console.log(movieinfo);
	const title = movieinfo.title;
	if(movieinfo.backdrop_path == null){
        movieinfo.backdrop_path = movieinfo.poster_path;
    }
	const release_date = movieinfo.release_date;
	const genreArray = movieinfo.genres;
	// const genres = genreArray.map((item, idx) => {
	// 	return item.name;
	// })
	const toHoursAndMinutes = (runtime) => {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return { hours, minutes };
	  }
	const { hours, minutes } = toHoursAndMinutes(runtime);

	console.log(genreArray);
	const numToWord = (num) => {
		// Nine Zeroes for Billions
		return Math.abs(Number(num)) >= 1.0e+9
	
		? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "B"
		// Six Zeroes for Millions 
		: Math.abs(Number(num)) >= 1.0e+6
	
		? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "M"
		// Three Zeroes for Thousands
		: Math.abs(Number(num)) >= 1.0e+3
	
		? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "K"
	
		: Math.abs(Number(num));
	}
	const budget = numToWord(movieinfo.budget);
	const revenue = numToWord(movieinfo.revenue);

	console.log(budget, revenue);
	let overview = movieinfo.overview;
	
	const adult = movieinfo.adult ? '18+' : 'PG-13';

  return (
	<div className="d-flex  movie-info" >
      <Image src={`https://image.tmdb.org/t/p/w1280${movieinfo.backdrop_path}`} fluid />
	  <div className='movie-detail'>
		<p className="fw-semibold w-75 fs-4">{title}</p>
		<p className="my-2 text-white-50" >
			{hours}h {minutes}m | {adult} | {release_date} 
		</p>
		<p className="w-75 mt-2">
			{overview}
		</p>
		<p>
			Budget: <span className='text-white-50'>{budget}</span><br/>
			Revenue: <span className='text-white-50'>{revenue}</span>
		</p>
	  </div>
    </div>
  )
}

export default Moviedetail