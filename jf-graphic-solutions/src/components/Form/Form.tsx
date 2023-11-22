import './Form.css'
import {ZodType, z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

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

  return (
      <form  className='form' onSubmit={handleSubmit(submitData)}>
        <label className='form-label' htmlFor="firstname">First Name:</label>
        <input id ='firstname' type="text" {...register('firstName')}/>
        {errors.firstName && <span className='errors'>{errors.firstName.message}</span>}
        <label className='form-label' htmlFor="lastname">Last Name:</label>
        <input id='lastname' type="text" {...register('lastName')}/>
        {errors.lastName && <span className='errors'>{errors.lastName.message}</span>}
        <label className='form-label' htmlFor="email">Email:</label>
        <input id='email' type="email" {...register('email')}/>
        {errors.email && <span className='errors'>{errors.email.message}</span>}
        <label className='form-label' htmlFor="message">Message:</label>
        <input id='message' type='text' {...register('message')} />
        {errors.message && <span className='errors'>{errors.message.message}</span>}
        <input type='submit' />
      </form>
  );
}

export default Form;