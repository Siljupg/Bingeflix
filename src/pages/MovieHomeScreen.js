import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';


function MoviesHomeScreen() {

  const movieList = useSelector((state) => state.productData.movieList);

    return (
      <div className='row margin-box'>
        {movieList && movieList.map((movie, index) => (
          <button className='banner__button-n movie-box' key={index}>
            <div className='movie-image'>
              <img className='movie-poster' src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}alt= 'img'/>
            </div>
            <div>
            <p className='movie-font'>{movie?.original_title || movie?.original_name}</p>
            <p>({movie.media_type})</p>
            </div>
          </button>
        ))}
      </div>
    )
  }

  export default MoviesHomeScreen;