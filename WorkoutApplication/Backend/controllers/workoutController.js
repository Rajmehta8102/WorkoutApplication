const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')


// get all workout 
const getAllWorkout = async (req,res) => {
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt : -1})
    res.status(200).json(workouts)
}
// get a single workout 
const getSingleWorkout = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error:'No Such ID'})
    }else{
    const workout = await Workout.findById(id)
    if(!workout) res.status(404).json({error : 'No Such wokrout'})
    res.status(200).json(workout)
    }
}

// create a new workout 
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body

    let emptyFields = []
    if(!title) emptyFields.push('title')
    if(!reps) emptyFields.push('reps')
    if(!load) emptyFields.push('load')
    if(emptyFields.length > 0){
        return res.status(400).json({error : 'Please fill in all the fields',emptyFields})
    }
    // add doc to db
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout 
const deleteWorkout = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error:'No Such ID'})
    }else{
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout) res.status(404).json({error : 'No Such wokrout'})
    res.status(200).json(workout)
    }
}

// update a workout 
const updateWorkout = async (req,res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error:'No Such ID'})
    }
    else{
        const workout = await Workout.findOneAndUpdate({_id: id},{
            ...req.body
        })
        if(!workout) res.status(404).json({error : 'No Such wokrout'})
            res.status(200).json(workout)
        }
}



module.exports = {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}