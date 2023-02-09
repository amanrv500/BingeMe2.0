//tmdb api key;
let api_key = "f0ac35b7b3bac44b4c7103bb2dd64991";

//omdb api key
let api_key2 = "394c72e4";

let omdb_movie_info="http://www.omdbapi.com/?";

let img_url = "https://image.tmdb.org/t/p/w185";

let original_img_url = "https://image.tmdb.org/t/p/original";


let genres_list_http = "https://api.themoviedb.org/3/genre/movie/list?";
let movie_genres_http = "https://api.themoviedb.org/3/discover/movie?";
let movie_detail_http = "https://api.themoviedb.org/3/movie";


let APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f0ac35b7b3bac44b4c7103bb2dd64991&query=&page=1";
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
let SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=f0ac35b7b3bac44b4c7103bb2dd64991&query=";

export {
    api_key,
    img_url,
    original_img_url,
    genres_list_http,
    movie_detail_http,
    movie_genres_http,
    APIURL,
    IMGPATH,
    SEARCHAPI,
    omdb_movie_info,
    api_key2
}