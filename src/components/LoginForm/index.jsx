import {useState} from 'react'
import {useNavigate, Navigate} from 'react-router'
import Cookies from 'js-cookie'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowaerror] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

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
  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    navigate('/', {replace: false})
  }
  const onSubmitfail = errMsg => {
    setShowaerror(true)
    setErrMsg(errMsg)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Navigate to="/" />
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitfail(data.error_msg)
    }
  }

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <h1>Login</h1>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showError && <p className="error-message">*{errMsg}</p>}
        <p>user : rahul</p>
      <p>pass : rahul@2021</p>
      </form>
    </div>
  )
}

export default LoginForm
