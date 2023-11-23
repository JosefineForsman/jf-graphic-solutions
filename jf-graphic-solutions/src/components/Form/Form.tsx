import './Form.css'
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import error from '../../assets/error-svgrepo-com (2).svg'

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    message: string
}

function Form() {
    const [notSavedFormData, setNotSavedFormData] = useState(false);

    const schema : ZodType<FormData> = z.object({
        firstName: z.string().min(2).max(30),
        lastName:z.string().min(2).max(30),
        email: z.string().email(),
        message: z.string().min(2).max(200)
    })

const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)})

const submitData = (data: FormData) =>{
    console.log('it worked', data)
}

  useEffect(() => {
    const handleOnBeforeUnload = (event: BeforeUnloadEvent) => {

        if( notSavedFormData ){
            event.preventDefault();
            event.returnValue = '';
        }    
      }
    window.addEventListener('beforeunload', handleOnBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleOnBeforeUnload);
    };
  }, [notSavedFormData]);

  function inputChange(){
    if(!notSavedFormData){
        setNotSavedFormData(true)
    }
  }

  return (
      <form  onChange={inputChange} className='form' onSubmit={handleSubmit(submitData)}>
        <article className='form__container'>
            <label className='form-label' htmlFor="firstname">First Name: </label>
            <input aria-label='Enter first name here'
                className='form-input' 
                id ='firstname' 
                type="text" {...register('firstName')}/>
            {errors.firstName && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.firstName.message}</span>}
        </article>
        <article className='form__container'>
            <label className='form-label' htmlFor="lastname">Last Name: </label>
            <input className='form-input' 
                aria-label='Enter last name here'
                id='lastname' 
                type="text" {...register('lastName')}/>
            {errors.lastName && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.lastName.message}</span>}
        </article>
        <article className='form__container'>
            <label className='form-label' htmlFor="email">Email: </label>
            <input className='form-input' 
                aria-label='Enter email here'
                id='email' 
                type="email" {...register('email')}/>
            {errors.email && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.email.message}</span>}
        </article>
        <article className='form__container'>
            <label className='form-label' htmlFor="message">Message: </label>
            <input className='form-input-textarea' 
                aria-label='Enter message here'
                id='message'  {...register('message')} 
                type='text' />
            {errors.message && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.message.message}</span>}
        </article>
        <input 
            aria-label='send message'
            className='form-button'
            type='submit' />
      </form>
  );
}

export default Form;