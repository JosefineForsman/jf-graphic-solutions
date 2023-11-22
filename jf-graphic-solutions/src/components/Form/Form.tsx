import './Form.css'


function Form() {


  return (
      <form  className='form'>
        <h2 className='form-title'>Send a message</h2>
        <article className='form__container'>
          <label htmlFor="name" className="form-label">Name:</label>
          <input id="name" type="text" className="form-input" required/>
          <label htmlFor="email" className="form-label">Email:</label>
          <input id="email" type="email" className="form-input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message"  className="form-input" rows={10} cols={50} required/>
          <button type="submit" className="form-button">Send</button>
        </article>
      </form>
  );
}

export default Form;