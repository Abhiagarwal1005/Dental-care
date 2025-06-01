import './mobileNav.css'
import logo from '../../assets/logo.png';

//@ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu }) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img src={logo} className='logo' alt="" />
                    <ul>
                        <li>
                            <a className='menu-item' href="#home">Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#about">About</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#services">Service</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#FAQ">FAQ's</a>
                        </li>
                        <a className='contact-btn' >Contact Us</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar;