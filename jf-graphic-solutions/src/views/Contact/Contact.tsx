import Header from "../../components/Header/Header"
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import './Contact.css'
import Footer from "../../components/Footer/Footer"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import Form from "../../components/Form/Form"
function Contact() {
  return (
    <main className="contact">
      <Header/>

      <section className="contact__container">
        <h1 className="text__title">Contact us:</h1>
        <Breadcrumbs/>
        <h2 className="contact__subtitle">Do you want to get in touch with us? Here are our contact details:</h2>
      <section className="contact__form">
        <Form/> 
       
    </section>
      </section>
      <Footer/>
    </main>
  )
}

export default Contact