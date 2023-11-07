import './Header.css'
import header from '../../assets/photo-johnny.png'
import Nav from '../Nav/Nav';
function Header(){

    return(
        <header>
            <Nav/>
            <img src={header} alt="the photographer is in action taking photos in the the wild with a nature landscape behind him." className='header-img' />
        </header>
    )
}
export default Header;