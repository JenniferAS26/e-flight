import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createData } from '../../../services/usersService.js'
import logo from '../../../assets/icons/logo.svg'
import Swal from 'sweetalert2'
import './styles.scss'

const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async ( userInfo  ) => {
    await createData(userInfo)
    const userConfirmCreation = await Swal.fire({
      title: 'Account created successfully',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      "customClass": {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userConfirmCreation.isConfirmed) {
      navigate('/sign-in')
      // window.location.reload()
    }
  }

  return (
    <section className='sign-form'>
      <form 
        className='sign-form__form-up' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='sign-form__form--logo-container'>
            <img src={logo} alt='logo icon' />
            <span>E-flight</span>
        </div>
        <h2 className='sign-form__form--title'>Crear cuenta</h2>
        <p className='sign-form__form--text up'>Si ya te has registrado con anterioridad no necesitas crear una cuenta nueva. <Link to='/sign-in'>inicia sesión</Link> con tus datos de siempre</p>
        <div className='document-wrapper grid gap-4'>
          <div className='grid gap-4'>
            <label htmlFor='document-type'>Tipo de documento</label>
            <select
              className='input'
              name='documentType'
              id='document-type'
              { ...register('documentType') }
            >
              <option value='cc'>Cédula de ciudadania</option>
              <option value='pastport'>Pasaporte</option>
            </select>
          </div>
          <div className='grid gap-4'>
            <label htmlFor='document-number-input'>Número de documento</label>
            <input
              className='input'
              type='number'
              id='document-number-input'
              name='documentNumber'
              { ...register('documentNumber') }
            />
          </div>
        </div>
        <div className='user-wrapper'>
          <div className='grid gap-4'>
            <label htmlFor='name-input'>Nombre(s)</label>
            <input
              className='input'
              type='text'
              id='name-input'
              name='username'
              { ...register('username') }
            />
          </div>
          <div className='grid gap-4'>
            <label htmlFor='lastname-input'>Apellido(s)</label>
            <input
              className='input'
              type='text'
              id='lastname-input'
              name='userlastname'
              { ...register('userlastname') }
            />
          </div>
        </div>
        <div className='date-number-wrapper grid gap-4'>
          <div className='grid gap-4'>
            <label htmlFor='date-input'>Fecha de nacimiento (dd/mm/aaaa)</label>
            <input
              className='input'
              type='date'
              id='date-input'
              name='birtdate'
              { ...register('birthdate') }
            />
          </div>
          <div className='grid gap-4'>
            <label htmlFor='cellphone-input'>Número de celular</label>
            <input 
              className='input'
              type='number' 
              id='cellphone-input' 
              name='phoneNumber'
              { ...register('phoneNumber') }
            />
          </div>
        </div>
        <div className='genre-account'>
          <div className='genre-wrapper'>
            <h4 className='genre-wrapper__title'>Género</h4>
            <div className='inputs-group'>
              <div>
                <input
                  type='radio'
                  id='man-input'
                  value='male'
                  name='genre'
                  { ...register('genre') }
                  defaultChecked
                />
                <label htmlFor='man-input'>Masculino</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='woman-input'
                  value='female'
                  { ...register('genre') }
                  name='genre'
                />
                <label htmlFor='woman-input'>Femenino</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='na-input'
                  value='other'
                  name='genre'
                  { ...register('genre') }
                />
                <label htmlFor='na-input'>Prefiero no decirlo</label>
              </div>
            </div>
          </div>
          <div className='account-info grid'>
            <h4 className='account-info__title'>Datos de ingreso a tu cuenta</h4>
            <div className='account-info__email grid'>
              <label htmlFor='email-input'>Email</label>
              <input
                className='input'
                type='email'
                id='email-input'
                name='email'
                { ...register('email') }
              />
            </div>
            <div className='account-info__password grid'>
              <label htmlFor='password-input'>Contraseña</label>
              <input
                className='input'
                type='password'
                id='password-input'
                name='password'
                { ...register('password') }
              />
            </div>
          </div>
        </div>
        <input className='submit-button' type='submit' value='Crear cuenta' />
      </form>

    </section>
  )
}

export default SignUp
