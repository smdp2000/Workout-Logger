import { FormEvent, useState } from 'react'
import { StyledForm } from '../styledComponents/StyledForm'
import { StyledButton } from '../styledComponents/StyledButton'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signup(email, password)
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
      <h3>Create an account</h3>
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

      <StyledButton disabled={isLoading}>Sign up</StyledButton>
      {error && (
        <div className="error">
          <span>Oops! </span>
          <span>{error}</span>
        </div>
      )}
    </StyledForm>
  )
}
