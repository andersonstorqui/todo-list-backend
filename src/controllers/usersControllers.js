import User from '../model/user.js'; 
import bcrypt from 'bcryptjs'; 

const createUser = async (req, res) => {
  const { email, password } = req.body;

  if ( !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuários', details: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuário', details: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const updatedData = { email };
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    await user.update(updatedData);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário', details: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await user.destroy();
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message });
  }
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
