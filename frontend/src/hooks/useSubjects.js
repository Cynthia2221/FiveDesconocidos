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

  const getSubjectById = (id) => {
    const subject = subjects.find(subject => subject.id === parseInt(id))
    return subject ? subject : "error find subject"
  }

  return {
    subjects,
    getSubjectById,
  }
}


export default useSubjects