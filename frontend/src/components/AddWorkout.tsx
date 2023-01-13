import { ChangeEvent, FormEvent, useState } from 'react'
// STYLED COMPONENTS
import { StyledButton } from './styledComponents/StyledButton'
import { StyledForm } from './styledComponents/StyledForm'
// CONTEXT
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function WorkoutForm() {
  const { dispatch } = useWorkoutContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([''])
  const { user } = useAuthContext()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    const workout = { title, load, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError('')
      setEmptyFields([])
      dispatch({ type: 'CREATE_WORKOUT', payload: json })
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg)</label>
      <input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <StyledButton>Add Workout</StyledButton>
      {error && <div className="error">{error}</div>}
    </StyledForm>
  )
}
