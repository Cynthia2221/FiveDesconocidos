const { Subject } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las materias", error });
  }
};

exports.findOne = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la materia", error });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const subject = await Subject.create({ name, description });
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la materia", error });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [updated] = await Subject.update({ name, description }, { where: { id: req.params.id } });

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
    const deleted = await Subject.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json({ message: "Materia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la materia", error });
  }
};
