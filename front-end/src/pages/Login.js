import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../helpers/api'
import { setToken } from '../helpers/auth'
import FormInput from '../components/FormInput'

const Login = ({ setIsLoggedIn }) => {
  // State variables to track user form input
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  // We need the routing history hook in order to send the user to the next page
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    login(data).then(handleSuccessfulLogin).catch(handleError)
  }

  const handleSuccessfulLogin = ({ token }) => {
    // We need to store the token for later
    setToken(token)
    // Set the App state variable isLoggedIn to true
    setIsLoggedIn(true)
    setIsError(false)
    // And finally, redirect the user
    history.push('/cities')
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Sign in to One Day In...</h1>
        <FormInput
          placeholder='email@email.com'
          type='email'
          name='email'
          {...formInputProps}
        />
        <FormInput
          placeholder='password'
          type='password'
          name='password'
          {...formInputProps}
        />
        <div>
          <input type='submit' value='Login' />
        </div>
        {isError ? (
          <div className='error'>
            <p>Error. Please try again.</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Login