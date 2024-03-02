import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import ExerciseDetail from './pages/ExerciseDetail.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
