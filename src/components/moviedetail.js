import React, { useState } from 'react'
import { Image, Button } from 'react-bootstrap';

const Moviedetail = (props) => {
    const movieinfo = props.movie;
	const [showMore, setShowMore] = useState(false);
	const handleClick = () => {
	  setShowMore(!showMore);
	};
	const runtime = movieinfo.runtime;
	const title = movieinfo.title;
	if(movieinfo.backdrop_path == null){
        movieinfo.backdrop_path = movieinfo.poster_path;
    }
	const release_date = movieinfo.release_date;
	const toHoursAndMinutes = (runtime) => {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return { hours, minutes };
	}
	const { hours, minutes } = toHoursAndMinutes(runtime);
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
	const budget = numToWord(movieinfo.budget) ? numToWord(movieinfo.budget) : 'N/A';
	const revenue = numToWord(movieinfo.revenue) ? numToWord(movieinfo.revenue) : 'N/A';
	const overview = movieinfo.overview;
	const adult = movieinfo.adult ? '18+' : 'PG-13';

  return (
	<div className="d-flex  movie-info" >
      <Image src={`https://image.tmdb.org/t/p/w1280${movieinfo.backdrop_path}`} fluid />
	  <div className='movie-detail'>
		<p className="fw-semibold w-50 mb-0 title">
			{title}
		</p>
		<p className="my-2 text-white-50" >
			{hours}h {minutes}m | {adult} | {release_date} 
		</p>
 		<div>
      		<p
        		style={{
          			height: showMore ? "auto" : "3em",
          			overflow: "hidden",
					width: '75%'
        		}}>
        			{overview}
      		</p>
      		<Button className='m-0 p-0 read-more text-white mb-2' variant="black"  onClick={handleClick}>
        		{showMore ? "Show Less" : "Read More"}
      		</Button>
    	</div>
		<p>
			Budget: <span className='text-white-50'>{budget}</span><br/>
			Revenue: <span className='text-white-50'>{revenue}</span>
		</p>
	  </div>
    </div>
  )
}

export default Moviedetail