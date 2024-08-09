import express from 'express';
import tasksController from '../controllers/tasksControllers.js';

const router = express.Router();

router.post('/tasks', tasksController.createTask);
router.get('/tasks', tasksController.getTasks);
router.get('/tasks/:id', tasksController.getTaskById);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

export default router;
