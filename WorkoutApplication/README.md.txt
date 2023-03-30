Created a basic workout application where user can perform login ,singup , and addworkout operations.
User is logged in or not is kept track by JWT web token(10 digits).
The Api routes are protected unless and until user is not logged in it cant access getallworkouts or create workout page.
IF User is login then it would see a logout button and it can access login or Signup page. 
Added a User_id property to add workout model which is received from req.
The users can only see those workouts that are associated to a paticular user id.