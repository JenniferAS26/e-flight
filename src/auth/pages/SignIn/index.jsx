import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { getDataByParams } from '../../../services/usersService'
import logo from '../../../assets/icons/logo.svg'
import Swal from 'sweetalert2'
import './styles.scss'

const SignIn = () => {
  // const { register, handleSubmit } = useForm()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()


  const handleSubmit = async ( event ) => {
    event.preventDefault()
    const userData = await getDataByParams({ email: email })
    
    if ( userData.length ) {
      if ( userData[0]?.password === password ) {
        login(email, password)
        navigate('/flight-booking', {
          replace: true
        })
        
      } else {
        Swal.fire({
          title: 'Email o contraseña incorrectos!',
          confirmButtonText: 'Ok',
          reverseButtons: true,
          "customClass": {
              button: 'custom-button',
              htmlContainer: 'custom-container'
          },
        })
      }
      
    } else {
      Swal.fire({
        title: 'Email o contraseña incorrectos, intente de nuevo!',
        confirmButtonText: 'Ok',
        reverseButtons: true,
        "customClass": {
            button: 'custom-button',
            htmlContainer: 'custom-container'
        },
      })
    }

  }

  return (
    <section className='sign-form'>
      <form
        className='sign-form__form'
        onSubmit={ handleSubmit }
      >
        <div className='sign-form__form--logo-container'>
          <img src={logo} alt="logo icon" />
          <span>E-flight</span>
        </div>
        <h2 className='sign-form__form--title'>Ingresa tu usuario</h2>
        <p className='sign-form__form--text'>Si ya eres parte de E-flight, ingresa tus datos</p>
        <div className="sign-form__form--field-wrapper">
          <input
            type='email'
            id='email-signin'
            name='email'
            value={email}
            onChange={ event => setEmail(event.target.value) }
          />
          <label htmlFor='email-signin'>Ingresa tu Email</label>
        </div>
        <div className="sign-form__form--field-wrapper">
          <input
            type='password'
            id='password-signin'
            name='password'
            value={password}
            onChange={ event => setPassword(event.target.value) }
          />
          <label htmlFor='password-signin'>Ingresa tu contraseña</label>
        </div>
        <input className='sign-form__form--button' type="submit" value='Iniciar sesión' />
        <button 
          className='sign-form__form--button-sec' 
          type="button"
          onClick={() => navigate('/sign-up')}
        >
          Crear cuenta
        </button>
      </form>
      
    </section>
  )
}

export default SignIn
