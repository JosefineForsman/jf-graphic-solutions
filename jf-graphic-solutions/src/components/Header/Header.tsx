import './Header.css'
import header from '../../assets/heroimg.png'
import Nav from '../Nav/Nav';
function Header(){

    return(
        <header className='header'>
            <Nav/>
                <h1 className='header__title'>JF <span className='header__span'>Graphic</span> Solution</h1>
                <h2 className='header__subtitle'> Your Photographer Tailored to Your Unique Needs</h2>
            <img src={header} alt="A decorative black camera adding an artistic touch to the header" className='header-img' />
        </header>
    )
}
export default Header;