import express from 'express'
import { signup, google,signout,signin } from '../controllers/auth.controller.js';

// Create a new Express router
const router = express.Router();

// Define POST routes for authentication

// Route for user registration (signup)
router.post("/signup", signup);

// Route for user authentication (signin)
router.post("/signin", signin);

// Route for user authentication using Google (Continue with Google)
router.post("/google", google);

// Route for user sign out
router.get("/signout", signout);

// Export the router to be used in your main Express application
export default router;