import { IWorkout } from '../models/IWorkout'
// CONTEXT
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'
// DATE FNS
import { formatDistanceToNow } from 'date-fns'
// COMPONENTS
import { StyledCard } from './styledComponents/StyledCard'

interface IWorkoutDetailsProps {
  workout: IWorkout
}

export default function DetailsCard(props: IWorkoutDetailsProps) {
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext()

  const deleteWorkout = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + props.workout._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }

  return (
    <StyledCard>
      <section>
        <h4>{props.workout.title}</h4>
        <div>
          <span className="details-bold">Load (kg): </span>
          {props.workout.load}
        </div>
        <div>
          <span className="details-bold">Reps:</span>
          {props.workout.reps}
        </div>
        <div>
          <span>
            {formatDistanceToNow(new Date(props.workout.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
      </section>
      <section>
        <div>
          <span
            onClick={deleteWorkout}
            className="material-symbols-outlined delete"
          >
            delete
          </span>
        </div>
      </section>
    </StyledCard>
  )
}
