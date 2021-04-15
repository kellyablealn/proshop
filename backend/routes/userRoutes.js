import express from 'express';
import {authUser, 
    getUserProfile, 
    registerUser, 
    updateUserProfile,
    getUsers} from '../controllers/userController.js';
import {protect, isAdmin} from '../middlewares/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .post(registerUser)
    .get(protect, isAdmin, getUsers);
router.route('/login').post(authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;