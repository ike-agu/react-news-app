import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BackButton } from '../../components';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <a href='https://www.linkedin.com/in/ikenna-agulobi//' target="_blank" rel="noopener noreferrer"> ikenna-Agulobi </a>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/news'>News</NavLink>
            {/* <BackButton /> */}
        </nav>
    )
};
