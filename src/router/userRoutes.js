import express from 'express';
import UserController from '../controllers/usersControllers.js'; 
import AuthController from '../controllers/authControllers.js'; 

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

export default router;
