import './Footer.css'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg'
import iphone from '../../assets/iphone-svgrepo-com.svg'
import mail from '../../assets/mail-svgrepo-com.svg'
function Footer(){

    return(
        <footer className='footer'>
            <section className='footer__social-media'>
          <h2 className="footer__title">Follow us on social media</h2>
          <aside className="contact__social-media">
            <img src={facebook} alt="Facebook icon" className="social-media-icon" />
            <a href="https://www.facebook.com/profile.php?id=100066812072840" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit Facebook page" 
              className="contact__text" 
              title='This is a link to JF graphics facebook page'>
            Go to our Facebook page
            </a>
          </aside>
          <aside className="contact__social-media">
            <img src={instagram} alt="Instagram icon" className="social-media-icon" />
            <a href="https://www.instagram.com/jfgraphicsolutions" 
              target="_blank" rel="noopener noreferrer" 
              aria-label="Visit Instagram profile" 
              className="contact__text"
              title='This is a link to JF graphics instagram page'>
              Go to our Instagram page
            </a>
          </aside>
          <aside className="contact__social-media">
            <img src={youtube} alt="YouTube icon" className="social-media-icon" />
            <a href="https://www.youtube.com/@johnnyforsman3054" 
              target="_blank" rel="noopener noreferrer" 
              aria-label="Visit YouTube channel" 
              className="contact__text" 
              title='This is a link to JF graphics youtube page'>
              Go to our YouTube page
            </a>
          </aside>
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
                <h2 className='footer__title'>Contact</h2>
              <article className='footer__address-container'>
                <img src={iphone} alt="" className='iphone-icon'/>
                <p className='footer__contact-text'>+46 761 60 34 27</p>
              </article>
              <article className='footer__address-container'>
                <img src={mail} alt="" className='iphone-icon'/>
                <p className='footer__contact-text'>johnny@jfgraphicsolutions.com</p>
              </article>
            </section>    

        </footer>
    )
}
export default Footer;