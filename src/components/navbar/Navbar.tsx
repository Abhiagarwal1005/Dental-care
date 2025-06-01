import './navbar.css';
import logo from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import MobileNavbar from '../mobile-navbar/MobileNavbar';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }


    return (
        <>

            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper border-b-[0.1px] border-secondary'>
                <div className='nav-content'>
                    <img src={logo} className='logo cursor-pointer' alt="" />
                    <ul>
                        <li>
                            <a className='menu-item' href="#home">Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#about">About</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#services">Services</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#FAQ">Gallery</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#Contact">Contact</a>
                        </li>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>{openMenu ? <IoClose size={'30px'} color='#20BBC1' /> : <IoMenu size={'30px'} color='#20BBC1' />}</button>

                </div>
            </nav>
        </>
    )
}

export default Navbar;