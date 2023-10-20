import React, { useState } from 'react';
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
