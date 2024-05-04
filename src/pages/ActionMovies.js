import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ActionMovies.css';


function ActionMovies () {
  const movieList = useSelector((state) => state.productData.actionMoviesList);
  console.log('action movies', movieList);
  return (
    <>
    <span className='original-text'>ACTION MOVIES</span>
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

export default ActionMovies; 