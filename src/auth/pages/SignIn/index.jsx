import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { getDataByParams } from '../../../services/usersService'
import Swal from 'sweetalert2'

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
    <section>
      <h2>Ingresa tu usuario</h2>
      <form
        className='grid'
        onSubmit={ handleSubmit }
      >
        <label htmlFor='email-signin'>Ingresa tu Email</label>
        <input 
          type='email' 
          id='email-signin' 
          name='email' 
          value={email}
          onChange={ event => setEmail(event.target.value) }
        />
        <label htmlFor='password-signin'>Ingresa tu contraseña</label>
        <input 
          type='password' 
          id='password-signin' 
          name='password' 
          value={password}
          onChange={ event => setPassword(event.target.value) }
        />
        <input type="submit" value='Iniciar sesión' />
      </form>
      
    </section>
  )
}

export default SignIn
