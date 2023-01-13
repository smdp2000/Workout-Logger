import { useEffect } from 'react'
import { IWorkout } from '../../models/IWorkout'
import { StyledGridWrapper } from '../styledComponents/StyledGridWrapper'
// CONTEXT
import { useWorkoutContext } from '../../hooks/useWorkoutContext'
import { useAuthContext } from '../../hooks/useAuthContext'
// COMPONENTS
import DetailsCard from '../WorkoutDetails'
import StyledForm from '../AddWorkout'

export default function Home() {
  const { workouts, dispatch } = useWorkoutContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }
    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <StyledGridWrapper>
      <div>
        {workouts &&
          workouts.map((workout: IWorkout) => (
            <DetailsCard key={workout._id} workout={workout} />
          ))}
      </div>
      <StyledForm />
    </StyledGridWrapper>
  )
}
