import { WorkoutContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('Use workout context need to be used in Workout Context Provider')
    }
    return context
}