import { useState } from 'react'
import Title from './components/title.jsx'
import data from './data/data.js';
import MediaCard from './components/employeecard.jsx'
import Container from '@mui/material/Container';
import './App.css'

function App() {
  return (
    <Container maxWidth="lg">
     <MediaCard employee={data}/>
     </Container>
  );
}

export default App
