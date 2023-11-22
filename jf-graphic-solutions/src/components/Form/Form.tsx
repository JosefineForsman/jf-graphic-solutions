import './Form.css'
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import error from '../../assets/error-svgrepo-com.svg'

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    message: string
}

function Form() {
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
const handleOnBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = '';
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleOnBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleOnBeforeUnload);
    };
  }, []);

  return (
      <form  className='form' onSubmit={handleSubmit(submitData)}>
        <label className='form-label' htmlFor="firstname">First Name:</label>
        <input className='form-input' id ='firstname' type="text" {...register('firstName')}/>
        {errors.firstName && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.firstName.message}</span>}
        <label className='form-label' htmlFor="lastname">Last Name:</label>
        <input className='form-input' id='lastname' type="text" {...register('lastName')}/>
        {errors.lastName && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.lastName.message}</span>}
        <label className='form-label' htmlFor="email">Email:</label>
        <input className='form-input' id='email' type="email" {...register('email')}/>
        {errors.email && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.email.message}</span>}
        <label className='form-label' htmlFor="message">Message:</label>
        <input className='form-input-textarea' id='message'  {...register('message')} type='text' />
        {errors.message && <span className='errors'><img src={error} alt="error-icon" className='error-icon' />{errors.message.message}</span>}
        <input className='form-button'type='submit' />
      </form>
  );
}

export default Form;