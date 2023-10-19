import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faGlobe } from '@fortawesome/fontawesome-free-solid';
import {Input} from 'reactstrap';
import './ErrorMessage.css';

const  ErrorMessageContainer = (props) => {
    return (
        <div className='row d-flex justify-content-center align-items-center'>
            <div className={props.className}>
                <p className='error-message'>{props.errorMessage}</p>
            </div>
        </div>
    )
}

export default ErrorMessageContainer;