import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGlobe } from '@fortawesome/fontawesome-free-solid';
import {Input} from 'reactstrap';
import './Header.css';
import image from '../../images/BINGEFLIX-LOGO.png';


const SigninContainer = () => {
    return(
        <div className='header-container'>
            <div className='netflix-container'>
                <div className='col'>
                    <img src= {image} alt='Bingeflix'/>
                </div>
            </div>
        <div className='netflix-showcase'>
            <div className='login-container'>
                <div className='signin-label'>
                    <p>Sign in</p>
                </div>
                <div className='m-2'>
                    <label>Email id</label>
                    <Input
                    type='email'
                    placeholder='Email address'
                    />
                </div>
                <div className='m-2'>
                    <label>Password</label>
                    <Input
                    type='password'
                    placeholder='Password'
                    />
                </div> 
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='netflix-button'>Login</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SigninContainer;