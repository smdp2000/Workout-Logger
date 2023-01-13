import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
// STYLED COMPONENTS
import { StyledButton } from '../styledComponents/StyledButton'
import { StyledForm } from '../styledComponents/StyledForm'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <StyledForm
      maxwidth="300px"
      margin="40px auto"
      padding="20px"
      background="#fff"
      borderradius="4px"
      onSubmit={handleSubmit}
    >
      <h3>Log in to your account</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />

      <StyledButton disabled={isLoading}>Log In</StyledButton>
      {error && <div className="error">{error}</div>}

      <p>
        Don't have an account? <Link to="/signup">Sign up!</Link>
      </p>
    </StyledForm>
  )
}
