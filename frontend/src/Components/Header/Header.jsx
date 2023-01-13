import React from 'react';

// Add Css file
import './header.css';

const Header = () => {

    const handlerClickNav = (e) => {
        e.preventDefault()
        const nav = document.querySelector('.nav_bar')
        if (nav) {
            nav.classList.toggle('d_block')
        } else {
            nav.classList.remove('d_block')
        }
    }

    return (
        <header>
            <div className="color_bar"></div>
            <nav>
                <button className='btn_nav' onClick={handlerClickNav}>
                    <i class='bx bx-menu' ></i>
                </button>
                <ul className='nav_bar'>
                    <li className='nav_bar-item'>
                        <i className='bx bx-home-circle'></i>
                        <a href="#">
                            Dashboards
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                    <li className='nav_bar-item'>
                        <i className='bx bx-tone'></i>
                        <a href="#">
                            UI Element
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                    <li className='nav_bar-item'>
                        <i className='bx bx-customize'></i>
                        <a href="#">
                            App
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                    <li className='nav_bar-item'>
                        <i className='bx bx-collection'></i>
                        <a href="#">
                            Components
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                    <li className='nav_bar-item'>
                        <i className='bx bx-file'></i>
                        <a href="#">
                            Extra Pages
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                    <li className='nav_bar-item'>
                        <i className='bx bx-layout'></i>
                        <a href="#">
                            Layout
                        </a>
                        <i className='bx bx-chevron-down'></i>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header