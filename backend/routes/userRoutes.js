import express from 'express';
import {authUser, 
    getUserProfile, 
    registerUser, 
    updateUserProfile} from '../controllers/userController.js';
import {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/').post(registerUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;