import Header from "../../components/Header/Header"
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
        <h2 className="contact__subtitle">Do you want to get in touch with us? Send us a message:</h2>
        <Form/> 
      </section>
      <Footer/>
    </main>
  )
}

export default Contact