import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGlobe } from '@fortawesome/fontawesome-free-solid';
import {Input} from 'reactstrap';
import './Header.css';
import image from '../../images/BINGEFLIX-LOGO.png';

function Header() {

	const [emailValue, setEmailValue] = useState('');

	const validateEmail = ()=> {
		// regular expression for validating email
		const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(emailValue);
	}

	const emailValidation = (event) => {
            console.log(event.target.value);
			const inputValue = event.target.value;
			if (validateEmail(inputValue)) {
				setEmailValue(inputValue)
			} else {
				console.log("error");
			}
			setEmailValue(inputValue);
	}

  return (
    <div className='header-container'>
        <div className='netflix-container'>
            <div className='col'>
                <img src= {image} alt='Bingeflix'/>
                {/* <div className='netflix-title'>BINGEFLIX</div> */}
            </div>
            <div className='col d-flex justify-content-end gap-5'>
                <select className='drop-select'>
                    <FontAwesomeIcon icon={faGlobe} />
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Malayalam</option>
                    <option>Hindi</option>
                </select>
                <Link to={'/'} className='btn-trans'>
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
            <button className='netflix-button'>Get Started &nbsp; <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
        <div className='rough-space'></div>
    </div>
  )
}

export default Header