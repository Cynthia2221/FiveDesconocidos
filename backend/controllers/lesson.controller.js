const { Subject, Lesson } = require('../models');

exports.findAll = async (req, res) => {
  try {
    const lesson = await Lesson.findAll();
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las materias", error });
  }
};

exports.findLessonByLevel = async (req, res) => {
  const { subjectId, levelId } = req.params;

  try {
    const lessons = await Lesson.findAll({
      where: {
        subjectId: subjectId,
        levelId: levelId
      },
      include: [
        {
          model: Subject,
          attributes: ['name', 'description']
        }
      ],
      attributes: ['id', 'name', 'url', 'photo', 'description']
    });

    const formatted = lessons.map(lesson => ({
      subject_name: lesson.Subject.name,
      description: lesson.Subject.description,
      lesson_name: lesson.name,
      lesson_id: lesson.id,
      lesson_description: lesson.description,
      lesson_photo: lesson.photo,
      url: lesson.url
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error in the lesson:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};


exports.findOne = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id, {
      include: [
        {
          model: Subject,
          attributes: ['name', 'description']
        }
      ],
      attributes: ['id', 'name', 'url', 'photo', 'description', 'content']
    });

    if (!lesson) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const formatted = {
      subject_name: lesson.Subject.name,
      subject_description: lesson.Subject.description,
      lesson_name: lesson.name,
      lesson_id: lesson.id,
      lesson_description: lesson.description,
      lesson_photo: lesson.photo,
      lesson_content: lesson.content,
      url: lesson.url
    };

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la materia", error });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const lesson = await Lesson.create({ name, description, url, photo, content });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la materia", error });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [updated] = await Lesson.update({ name, description, url, photo, content }, { where: { id: req.params.id } });

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
