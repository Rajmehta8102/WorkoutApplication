import { useAuthContext } from "../hooks/useAuthContext" 
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formmatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()
    const {user} = useAuthContext()
    const handleClick = async () => {
        if(!user){
            return
        }
        const response = await fetch('/api/'+ workout._id,{
            method:'Delete',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })     
        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_WORKOUT' , payload: json})
        }
    }


    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (KG):</strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>{formmatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true })}</p>
            <span className="material-symbols-outlined"onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails