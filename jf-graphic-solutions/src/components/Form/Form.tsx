import './Form.css'
import { useEffect, useRef } from 'react';

function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
          if (formRef.current && formRef.current.dirty) {
              event.preventDefault();
              event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
          }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
      };
  }, []);

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle form submission
  };


  const handleChange = () => {
      if (formRef.current) {
          formRef.current.dirty = true;
      }
  };

  return (
      <form ref={formRef} onSubmit={handleSubmit} className='form'>
        <h2 className='form-title'>Send a message</h2>
          <label htmlFor="name" className="form-label">Name:</label>
          <input id="name" type="text" onChange={handleChange} className="form-input" required/>
          <label htmlFor="email" className="form-label">Email:</label>
          <input id="email" type="email" onChange={handleChange} className="form-input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" onChange={handleChange} className="form-input" required/>
          <button type="submit" className="form-button">Send</button>
      </form>
  );
}

export default Form;