import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './TopRatedMovies.css';


function TopRatedMovies () {
  const movieList = useSelector((state) => state.productData.topRatedMoviesList);
  return (
    <>
    <span className='original-text'>TOP RATED MOVIES</span>
    <div className='scroll-container'>
      <div className='margin-box'>
        {movieList && movieList.map((movie, index) => (
          <button className='banner__button-n movie-box' key={index}>
            <div className='movie-image'>
              <img className='movie-poster' src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}alt= 'img'/>
            </div>
            <div>
            <p className='movie-font'>{movie?.original_title || movie?.original_name}</p>
            {/* <p>({movie.media_type})</p> */}
            </div>
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default TopRatedMovies; 