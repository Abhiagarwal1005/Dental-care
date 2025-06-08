import './mobileNav.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

//@ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu }) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img src={logo} className='logo' alt="" />
                    <ul>
                        <li>
                            <Link className='menu-item' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar;