const express = require('express')
const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.get('/workout',getAllWorkout)

router.get('/:id',getSingleWorkout)
// POST
router.post('/',createWorkout)
// DELETE
router.delete('/:id',deleteWorkout)
// Update the workout
router.patch('/:id',updateWorkout)

module.exports = router