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
        <ul>
          <li><a href="/" className='nav__link'>Home</a></li>
          <li><a href="/portfolio" className='nav__link'>Portfolio</a></li>
          <li><a href="/contact" className='nav__link'>Contact</a></li>
        </ul>
  
        <img src={hamburger} alt="menu-options" className='menu-options' onClick={toggleMenu} />
        {isOpen ? <MobilMeny isOpen={isOpen} onClose={toggleMenu} /> : null}
      </nav>
    )
}
export default Nav;