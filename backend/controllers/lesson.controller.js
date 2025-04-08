const { Subject, Level, Lesson } = require('../models');

exports.findAll = async (req, res) => {
  try {
    const lesson = await Lesson.findAll();
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las materias", error });
  }
};

exports.findLessonByLevel = async (req, res) => {
  try {
    const { subjectId, levelId } = req.query;

    if (!subjectId || !levelId) {
      return res.status(400).json({ error: 'Both subjectId and levelId are required' });
    }

    const result = await Subject.findAll({
      where: { id: subjectId },
      attributes: ['name', 'description'],
      include: [{
        model: Level,
        where: { id: levelId },
        through: {
          where: { subjectId: subjectId },
          attributes: []
        },
        required: true,
        include: [{
          model: Lesson,
          attributes: ['name', 'url'],
          required: true
        }]
      }]
    });

    // Formatear la respuesta para que coincida con tu SQL original
    const formattedResult = result.map(subject => {
      return subject.Levels.map(level => {
        return level.Lessons.map(lesson => ({
          subjectName: subject.name,
          subjectDescription: subject.description,
          lessonName: lesson.name,
          lessonUrl: lesson.url
        }));
      }).flat();
    }).flat();

    res.json(formattedResult);
  } catch (error) {
    console.error('Error fetching lessons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.findOne = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la materia", error });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const lesson = await Lesson.create({ name, description });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la materia", error });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [updated] = await Lesson.update({ name, description }, { where: { id: req.params.id } });

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
    const deleted = await Lesson.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }
    res.json({ message: "Materia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la materia", error });
  }
};
