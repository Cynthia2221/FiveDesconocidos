import { useEffect, useState } from "react"
import LessonService from "../services/lesson.service"


const useLessons = (levelId, subjectId, lesson_id) => {
  const [lessons, setLessons] = useState([])
  const [lesson, setLesson] = useState([])

  useEffect(() => {
    LessonService.getLessonsByLevelAndSubject(levelId, subjectId)
      .then((response) => {
        setLessons(response)
      })
    getLessonById(lesson_id)
  }, [lesson_id])

  const getLessonById = (lessonId) => {
    LessonService.show(lessonId)
      .then((response) => {
        setLesson(response)
      })
  }

  return {
    lessons,
    lesson,
    getLessonById,
  }
}

export default useLessons
