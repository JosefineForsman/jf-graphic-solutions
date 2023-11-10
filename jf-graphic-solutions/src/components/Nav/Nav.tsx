import './Nav.css'
import { useState } from 'react';
import hamburger from '../../assets/hamburger-icon.png'
import MobilMeny from '../MobilMeny/MobilMeny';
function Nav(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className='nav'>
        <ul className='nav__ul'>
          <li className='nav__li'><a href="/" className='nav__link'>Home</a></li>
          <li className='nav__li'><a href="/portfolio" className='nav__link'>Portfolio</a></li>
          <li className='nav__li'><a href="/contact" className='nav__link'>Contact</a></li>
        </ul>
        <button className='nav__button' onClick={toggleMenu} aria-label='Open Menu'>
            <img src={hamburger} alt="Hamburger Menu" className='menu-options' />
        </button>
        {isOpen ? <MobilMeny isOpen={isOpen} onClose={toggleMenu} /> : null}
      </nav>
    )
}
export default Nav;