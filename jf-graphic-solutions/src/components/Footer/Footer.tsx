import './Footer.css'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg'
function Footer(){

    return(
        <footer className='footer'>
            <section className='footer__social-media'>
                <h2 className='footer__title'>Social Media</h2>
                <article>
                    <a href="https://www.facebook.com/profile.php?id=100066812072840" title="Visit our Facebook page">
                        <img src={facebook} alt="Facebook Icon" className='facebook-icon' />
                    </a>
                    <a href="https://www.instagram.com/jfgraphicsolutions" title="Visit our Instagram page">
                        <img src={instagram} alt="Instagram Icon" className='instagram-icon' />
                    </a>
                    <a href="https://www.youtube.com/@johnnyforsman3054" title="Visit our Youtube page">
                        <img src={youtube} alt="Youtube Icon" className='youtube-icon' />
                    </a>
                </article>
            </section>  
            <section className='footer__site'>
                <h2 className='footer__title'>Site</h2>
                <ul className='footer__ul'>
                    <li className='footer__li'><a href="/" title="Visit Home">Home</a></li>
                    <li className='footer__li'><a href="/portfolio" title="Visit Portfolio" >Portfolio</a></li>
                    <li className='footer__li'><a href="/contact" title="Visit Contact">Contact</a></li>
                </ul>
            </section>
            <section className='footer__address'>
                <h2 className='footer__title'>Address</h2>
                <p className='text__footer'>Kollungsvägen 15B</p>
                <p className='text__footer'>47131</p>
                <p className='text__footer'>Skärhamn</p>
            </section>    

        </footer>
    )
}
export default Footer;