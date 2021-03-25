import React from 'react';
import '../error-indicator/error-indicator.css';
import imgError from '../error-indicator/error.png';

const OnError = () => {
    return(
        
        <div className="error">     
        <img src={imgError} alt="Error img"/>
            <div>УПС...</div>
            <div>Извините, произошла ошибка загрузки данных...</div>
            <div ><span>(но мы постараемся исправить эту ошибку как можно скорее)</span></div>
        
        </div>
    )
}

export default OnError;