const { User, Subject, UserSubject } = require('../models');
const bcrypt = require('bcryptjs');

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

    // Hashear la contraseña antes de crear el usuario
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const photo = req.file ? `public/images/${req.file.filename}` : null;
    const user = await User.create({ name, email, password: hashedPassword, age, photo: photo });

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

    let updatedData = { name, email, age };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedData.password = hashedPassword;
    }

    if (req.file) {
      updatedData.photo = `public/images/${req.file.filename}`;
    }

    await user.update(updatedData);
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
