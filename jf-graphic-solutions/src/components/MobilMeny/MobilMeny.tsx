import './MobilMeny.css'
import closeIcon from '../../assets/cross-mark.svg'

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }
function MobilMeny({ isOpen, onClose}: MobileMenuProps){
  

    return(
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <button className='close-button' onClick={onClose} aria-label='Close Menu'>
                <img src={closeIcon} alt="close-menu" className='close-icon' />
            </button>
        <ul className="nav__links">
          <li className='mobile__nav__li'><a href="/" className='mobil__nav__link'>Home</a></li>
          <li className='mobile__nav__li'><a href="/portfolio" className='mobil__nav__link'>Portfolio</a></li>
          <li className='mobile__nav__li'><a href="/contact" className='mobil__nav__link'>Contact</a></li>
        </ul>
      </div>


    )
}
export default MobilMeny;