import { useEffect, useState } from "react"
import LevelService from "../services/level.service"


const useLevels = () => {
  const [levels, setLevels] = useState([])

  useEffect(() => {
    LevelService.getAll()
      .then((response) => {
        setLevels(response)
      })
  }, [])



  return {
    levels,
  }
}

export default useLevels
