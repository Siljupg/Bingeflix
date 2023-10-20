import React, { useState } from 'react'
import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/action';
import { useEffect } from 'react'
import BingeNavBar from './BingeNavBar';
import BingeBanner from './BingeBanner';


function NetflixShowPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ type: 'all' }));
    console.log("banner api");
  }, [])

  const movieList = useSelector((state) => state.productData.movieList);

  const MoviesHomeScreen = () => {
    return (
      <div className='row margin-box'>
        {movieList && movieList.map((movie, index) => (
          <button className='banner__button-n movie-box' key={index}>
            <div className='movie-image'>
              <img className='movie-poster' src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}alt= 'img'/>
            </div>
            <p className='movie-font'>{movie?.original_title || 'Untitled'}</p>
            <p>({movie.media_type})</p>
          </button>
        ))}
      </div>
    )
  }
  return (
    <div className='movie-container'>
      <BingeNavBar/>
      <BingeBanner/>
      <MoviesHomeScreen/>
    </div>

  )
}

export default NetflixShowPage