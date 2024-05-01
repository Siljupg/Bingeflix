import React, { useState } from 'react'
import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/action';
import { useEffect } from 'react'
import BingeNavBar from './BingeNavBar';
import BingeBanner from './BingeBanner';
import MovieHomeScreen from './MovieHomeScreen';


function NetflixShowPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ type: 'all' }));
    console.log("banner api");
  }, [])


  return (
    <div className='movie-container'>
      <BingeNavBar/>
      <BingeBanner/>
      {/* <MovieHomeScreen/> */}

    </div>

  )
}

export default NetflixShowPage