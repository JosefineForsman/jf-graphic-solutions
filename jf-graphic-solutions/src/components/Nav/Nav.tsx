import './Nav.css'
function Nav(){

    return(
        <nav className='nav'>
            <ul>
                <li><a href="/" className='nav__link'>Home</a></li>
                <li><a href="/portfolio" className='nav__link'>Portfolio</a></li>
                <li><a href="/contact" className='nav__link'>Contact</a></li>
              </ul>
        </nav>
    )
}
export default Nav;