import {useState} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
    setShowError(false)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
    setShowError(false)
  }

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>

      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>

      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    navigate('/', {replace: true})
  }

  const onSubmitFail = errorMessage => {
    setShowError(true)
    setErrMsg(errorMessage)
  }

  const submitForm = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFail(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <h1>Sign In</h1>

        <div className="input-container">
          {renderUsernameField()}
        </div>

        <div className="input-container">
          {renderPasswordField()}
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        {showError && (
          <p className="error-message">
            *{errMsg}
          </p>
        )}

        <p className="signup-text">
          Don't have an account?
        </p>

        <button
          type="button"
          className="signup-link-button"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default LoginForm