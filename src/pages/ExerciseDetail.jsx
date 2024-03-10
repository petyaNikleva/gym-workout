import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import ExerciseVideos from '../components/ExerciseVideos.jsx'
import SimilarExercises from '../components/SimilarExercises.jsx'
import Detail from '../components/Detail.jsx'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youTubeOptions } from '../utils/fetchData.js'
import { BASE_URL } from '../utils/constants.js'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  
  const { id } = useParams();


  useEffect(() => {
    const fetchExercisesData = async () => {
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${BASE_URL}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData); 

      const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${
        exerciseDetailData.name
      }`, youTubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${BASE_URL}/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${BASE_URL}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    
    }
    fetchExercisesData(); 

  },[id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail