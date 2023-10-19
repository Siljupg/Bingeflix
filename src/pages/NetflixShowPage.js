import React, { useState } from 'react'
import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/action';
import { useEffect } from 'react'


function NetflixShowPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ type: 'all' }));
  }, [])

  const movieList = useSelector((state) => state.productData.movieList);
  console.log("movieList", movieList);

  const MoviesHomeScreen = () => {
    return (
      <div className='row margin-box'>
        {movieList && movieList.map((movie, index) => (
          <button className='movie-box' key={index}>
            <div className='movie-image'>
              <img src= {movie.backdrop_path} alt= 'img'/>
            </div>
            <p className='movie-font'>{movie.original_title}</p>
            <p>({movie.media_type})</p>
          </button>
        ))}
      </div>
    )
  }
  return (
    <div className='movie-container'>
      <MoviesHomeScreen/>
    </div>

  )
}

export default NetflixShowPage