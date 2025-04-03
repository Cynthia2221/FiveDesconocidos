const { Level } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const level = await Level.findAll();
    res.json(level);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las materias", error });
  }
};

exports.findOne = async (req, res) => {
  try {
    const level = await Level.findByPk(req.params.id);
    if (!level) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json(level);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la materia", error });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const level = await Level.create({ name });
    res.status(201).json(level);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la materia", error });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [updated] = await Level.update({ name, description }, { where: { id: req.params.id } });

    if (!updated) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json({ message: "Materia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la materia", error });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Level.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json({ message: "Materia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la materia", error });
  }
};
