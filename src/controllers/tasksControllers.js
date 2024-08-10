import Task from '../model/tasks.js';

const createTask = async (req, res) => {
  const { tasks, description } = req.body;
  try {
    const task = await Task.create({ tasks, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar tarefa', details: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    console.log(tasks); 
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter tarefas', details: error.message });
  }
};
const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter tarefa', details: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { tasks, completed } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    await task.update({ tasks, completed });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa', details: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  console.log(`Tentando deletar tarefa com ID: ${id}`);
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    await task.destroy();
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    console.log(`Erro ao deletar tarefa: ${error.message}`);
    res.status(500).json({ error: 'Erro ao deletar tarefa', details: error.message });
  }
};


export default { createTask, getTasks, getTaskById, updateTask, deleteTask };
