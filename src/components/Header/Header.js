import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGlobe } from '@fortawesome/fontawesome-free-solid';
import {Input} from 'reactstrap';
import Select from 'react-select';
import './Header.css';
import image from '../../images/BINGEFLIX-LOGO.png';
import ErrorMessageContainer from '../commonUtils/ErrorMessage';
import { useDispatch } from 'react-redux';
import { getGenreList, getMoviesList } from '../../redux/action';

function Header() {

	const [emailValue, setEmailValue] = useState('');
    const [className, setClassName] = useState('d-none');
    const [disabledButton, setDisabledButton] = useState(true);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGenreList())
    })

    useEffect(()=> {
        dispatch(getMoviesList({
            type: 'all'
        }))
    })


	const validateEmail = ()=> {
		// regular expression for validating email
		const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(emailValue);
	}

	const emailValidation = (event) => {
            console.log(event.target.value);
			const inputValue = event.target.value;
			if (validateEmail(inputValue)) {
				setEmailValue(inputValue);
                setClassName('d-none');
                setDisabledButton(false);

			} else {
                setClassName('error-msg-container')
                console.log("inside else");
                setDisabledButton(true);
			}
			setEmailValue(inputValue);
	}

    const languageOptionList = [
        {value:'English', label: 'English'},
        {value:'Espanol', label: 'Espanol'},
        {value:'Malayalam', label: 'Malayalam'},
        {value:'Hindi', label:'Hindi'},
        {value:'Arabic', label:'Arabic'},
        {value:'Turkish', label:'Turkish'},
        {value:'Tamil', label:'Tamil'},
        {value:'Telugu', label:'Telugu'}]
    const language = languageOptionList.map((language) => {
        return language;
    })

  return (
    <div className='header-container'>
        <div className='netflix-container'>
            <div className='col'>
                <img src= {image} alt='Bingeflix'/>
            </div>
            <div className='col d-flex justify-content-end gap-5'>
                <Select className='binge-select' options={language}/>
                <Link to={'/sign-in'} className='btn-trans'>
                    Sign in
                </Link>
            </div>
        </div>
        <div className='netflix-showcase'>
            <h1 className='main-text'>Unlimited movies, TV shows and more.</h1>
            <h3 className='main-subtext'>Watch anywhere. Cancel anytime.</h3>
            <h4 className='main-sub-des-text'>Ready to watch? Enter your email to create or restart your membership.</h4>
        </div>
        <div className='netflix-search'>
            <Input 
             className='netflix-input'
             type='email' 
             onChange={(event) => {emailValidation(event)}}
             placeholder='Email address'/>
            <Link to={disabledButton ?"#" : '/netflix-show'}>
            <button 
            className={disabledButton === true ? 'netflix-button-disabled' : 'netflix-button'}
            disabled= {disabledButton}
            >Get Started &nbsp; <FontAwesomeIcon icon={faArrowRight}/>
            </button>

            </Link>
        </div>
        <ErrorMessageContainer
            className={className}
            errorMessage="Please enter a valid email address."
        />
        <div className='rough-space'></div>
    </div>
  )
}

export default Header
