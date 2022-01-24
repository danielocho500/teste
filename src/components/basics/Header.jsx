import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.svg';

export const Header = () => {

    const navigation = useNavigate();

    const returnHome = (e) => {
        e.preventDefault();

        navigation("/herodex");
    }

    return (
        <div className="heroDex__flex">
            <h1 className='title' onClick={returnHome}> HeroDex </h1>
            <img src={logo} className='heroDex__logo' onClick={returnHome} alt="HeroDex Logo" />
        </div>
    )
};
