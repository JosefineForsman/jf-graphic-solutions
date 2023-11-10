import './Header.css'
import header from '../../assets/photo-johnny.png'
import Nav from '../Nav/Nav';
function Header(){

    return(
        <header>
            <Nav/>
            <img src={header} alt="the photographer is in action taking photos in the the nature with a forrest landscape behind him." className='header-img' />
            <h1 className='header__title'>JF Graphic Solution</h1>
        </header>
    )
}
export default Header;