import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createData } from '../../../services/usersService.js'

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async ( userInfo  ) => {
    await createData(userInfo)
  }

  return (
    <section>
      <h2>Crear cuenta</h2>
      <p>Si ya te has registrado con anterioridad no necesitas crear una cuenta nueva. <Link to='/sign-in'>inicia sesión</Link> con tus datos de siempre</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid'>
          <label htmlFor='document-type'>Tipo de documento</label>
          <select 
            name='documentType' 
            id='document-type'
            { ...register('documentType') }
          >
            <option value='cc'>Cédula de ciudadania</option>
            <option value='pastport'>Pasaporte</option>
          </select>
          <label htmlFor='document-number-input'>Número de documento</label>
          <input 
            type='number' 
            id='document-number-input' 
            name='documentNumber'
            { ...register('documentNumber') }
          />
        </div>
        <div className='grid'>
          <label htmlFor='name-input'>Nombre(s)</label>
          <input 
            type='text' 
            id='name-input' 
            name='username'
            { ...register('username') } 
          />
        </div>
        <div className='grid'>
          <label htmlFor='lastname-input'>Apellido(s)</label>
          <input 
            type='text' 
            id='lastname-input' 
            name='userlastname' 
            { ...register('userlastname') } 
          />
        </div>
        <div className='grid'>
          <label htmlFor='date-input'>Fecha de nacimiento (dd/mm/aaaa)</label>
          <input 
            type='date' 
            id='date-input' 
            name='birtdate'
            { ...register('birthdate') }
          />
        </div>
        <div>
          <h4>Género</h4>
          <input 
            type='radio' 
            id='man-input' 
            value='male' 
            name='genre' 
            { ...register('genre') }
            defaultChecked 
          />
          <label htmlFor='man-input'>Masculino</label>
          <input 
            type='radio' 
            id='woman-input' 
            value='female' 
            { ...register('genre') }
            name='genre' 
          />
          <label htmlFor='woman-input'>Femenino</label>
          <input 
            type='radio' 
            id='na-input' 
            value='other' 
            name='genre' 
            { ...register('genre') }
          />
          <label htmlFor='na-input'>Prefiero no decirlo</label>
        </div>
        <div className='grid'>
          <label htmlFor='cellphone-input'>Número de celular</label>
          <input 
            type='number' 
            id='cellphone-input' 
            name='phoneNumber'
            { ...register('phoneNumber') }
          />
        </div>
        <div className='grid'>
          <h4>Datos de ingreso a tu cuenta</h4>
          <div>
            <label htmlFor='email-input'>Email</label>
            <input 
              type='email' 
              id='email-input' 
              name='email'
              { ...register('email') }
            />
          </div>
          <div>
            <label htmlFor='password-input'>Contraseña</label>
            <input 
              type='password' 
              id='password-input' 
              name='password'
              { ...register('password') }
            />
          </div>
        </div>
        <input type='submit' value='Crear cuenta' />
      </form>

    </section>
  )
}

export default SignUp
