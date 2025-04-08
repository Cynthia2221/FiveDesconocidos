import { useEffect, useState } from "react"
import SubjectService from "../services/subjects.service"

const useSubjects = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    SubjectService.getAll()
      .then((response) => {
        setSubjects(response)
      })
  }, [])



  return {
    subjects,
  }
}


export default useSubjects