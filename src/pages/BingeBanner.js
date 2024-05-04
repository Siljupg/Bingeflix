import React, { useEffect, useState } from 'react'
import './BingeBanner.css'
import banner from '../images/Netflix-banner.png'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/action';
import MovieHomeScreen from './MovieHomeScreen';
import BingeFlixOriginals from './BingeFlixOriginals';
import TopRatedMovies from './TopRatedMovies';
import ActionMovies from './ActionMovies';
import ComedyMoives from './ComedyMovies';
import HorrorMoives from './HorrorMovies';

function BingeBanner() {

    const [movie, setMovie] = useState([]);
    const dispatch =useDispatch();
    const movieList = useSelector((state) => state.productData.movieList);

    
    useEffect(() => {

        if (movieList.length > 0) {
            setMovie(
                movieList[
                    Math.floor(Math.random()*movieList.length - 1)
                ]
            );
        }

    },[movieList])

  return (
    <>
    <header 
        className='bannerBinge'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.original_name}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>Add to My list</button>
            </div>
            <h1 className='banner__description'>
                {movie?.overview || 'Desription not available right now'}
            </h1>
        </div>

    </header>
    {/* <div className='banner--fadeBottom'/> */}
        <BingeFlixOriginals/>
        <TopRatedMovies/>
        <ActionMovies/>
        <ComedyMoives/>
        <HorrorMoives/>
        <MovieHomeScreen/>
    </>
  )
}

export default BingeBanner
