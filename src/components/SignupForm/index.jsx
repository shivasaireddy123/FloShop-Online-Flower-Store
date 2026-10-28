import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './index.css'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
    setErrorMessage('')
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
    setErrorMessage('')
  }

  const onChangeConfirmPassword = event => {
    setConfirmPassword(event.target.value)
    setErrorMessage('')
  }

  const submitSignupForm = event => {
    event.preventDefault()

    if (username === '' || password === '' || confirmPassword === '') {
      setErrorMessage('Please fill in all the fields.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    /*
      IMPORTANT:

      This is only frontend validation.

      To actually create an account, you need to send
      these details to your backend/signup API.
    */

    alert('Signup successful! Now you can sign in.')

    navigate('/login')
  }

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={submitSignupForm}>
        <h1>Sign Up</h1>

        <div className="input-container">
          <label className="input-label" htmlFor="signup-username">
            USERNAME
          </label>

          <input
            type="text"
            id="signup-username"
            className="username-input-field"
            value={username}
            onChange={onChangeUsername}
            placeholder="Enter username"
          />
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="signup-password">
            PASSWORD
          </label>

          <input
            type="password"
            id="signup-password"
            className="password-input-field"
            value={password}
            onChange={onChangePassword}
            placeholder="Enter password"
          />
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="confirm-password">
            CONFIRM PASSWORD
          </label>

          <input
            type="password"
            id="confirm-password"
            className="password-input-field"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="Confirm password"
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        {errorMessage !== '' && (
          <p className="error-message">
            *{errorMessage}
          </p>
        )}

        <p className="signin-text">
          Already have an account?
        </p>

        <button
          type="button"
          className="signin-link-button"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignupForm