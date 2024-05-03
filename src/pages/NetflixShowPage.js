import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList, getGenreList } from '../redux/action';
import { useEffect } from 'react'
import BingeNavBar from './BingeNavBar';
import BingeBanner from './BingeBanner';
import MovieHomeScreen from './MovieHomeScreen';
import { Row } from 'reactstrap';


function NetflixShowPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ type: 'all' }));
    console.log("banner api");
  }, [])

  useEffect(() => {
    dispatch(getGenreList({ type: 'all' }));
    console.log("genre api");
  }, [])



  return (
    <div className='movie-container'>
      <BingeNavBar/>
      <BingeBanner/>
    </div>

  )
}

export default NetflixShowPage