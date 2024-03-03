import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner.jsx'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'
import { Box } from '@mui/material'

const Home = () => {
  const [exercise, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        serBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home