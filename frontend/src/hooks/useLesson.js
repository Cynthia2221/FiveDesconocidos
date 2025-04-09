import { useEffect, useState } from "react"
import LessonService from "../services/lesson.service"


const useLessons = (levelId, subjectId) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    LessonService.getLessonsByLevelAndSubject(levelId, subjectId)
      .then((response) => {
        console.log(response)
        setLessons(response)
      })
  }, [])



  return {
    lessons,
  }
}

export default useLessons
