import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList,
  getGenreList,
  getTopRatedMoviesList,
  getActionMoviesList,
  getComedyMoviesList,
  getHorrorMoviesList,
     } from '../redux/action';
import { useEffect } from 'react'
import BingeNavBar from './BingeNavBar';
import BingeBanner from './BingeBanner';
import MovieHomeScreen from './MovieHomeScreen';
import { Row } from 'reactstrap';


function NetflixShowPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ type: 'all' }));
   }, [])

  useEffect(() => {
    dispatch(getGenreList({ type: 'all' }));
  }, [])

  useEffect(() => {
    dispatch(getTopRatedMoviesList({ type: 'all' }));
  }, [])

  useEffect(() => {
    dispatch(getActionMoviesList({ type: 'all' }));
  }, [])

  useEffect(() => {
    dispatch(getComedyMoviesList({ type: 'all' }));
  }, [])

  useEffect(() => {
    dispatch(getHorrorMoviesList({ type: 'all' }));
  }, [])


  return (
    <div className='movie-container'>
      <BingeNavBar/>
      <BingeBanner/>
    </div>

  )
}

export default NetflixShowPage