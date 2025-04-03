const { User, Subject, UserSubject } = require('../models');

exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Subject,
        through: { attributes: [] }
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: {
        model: Subject,
        through: { attributes: [] }
      }
    });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, email, password, age, subjectId } = req.body;
    const user = await User.create({ name, email, password, age });

    if (subjectId) {
      const subject = await Subject.findByPk(subjectId);
      if (!subject) {
        return res.status(404).json({ message: "Asignatura no encontrada" });
      }
      await UserSubject.create({ userId: user.id, subjectId });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await user.update({ name, email, password, age });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await user.destroy();
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};
