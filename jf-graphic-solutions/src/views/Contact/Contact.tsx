import Header from "../../components/Header/Header"
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import './Contact.css'
import Footer from "../../components/Footer/Footer"
function Contact() {
  return (
    <main className="contact">
      <Header/>
      <section className="contact__container">
        <h1 className="text__title">Contact us:</h1>
        <h2 className="contact__subtitle">Do you want to get in touch with us? Here are our contact details:</h2>
        <article className="contact__content"> 
        <section>
          <h2 className="contact__title">Email</h2>
          <p className="contact__text">johnny@jfgraphicsolutions.com</p>
        </section>
        <section>
          <h1 className="contact__title">Phone</h1>
          <p className="contact__text">+46 761 60 34 27</p>
        </section>
        <section>
          <h2 className="contact__title">Follow us on social media</h2>
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
        </article>
      </section>
      <Footer/>
    </main>
  )
}

export default Contact