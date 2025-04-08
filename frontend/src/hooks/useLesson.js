import { useEffect, useState } from "react"
import LessonService from "../services/lesson.service"


const useLessons = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    LessonService.getAll()
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
