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
    
    }
    fetchExercisesData(); 

  },[id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail