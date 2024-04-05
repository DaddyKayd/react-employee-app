import { useState } from 'react'
import Title from './components/title.jsx'
import data from './data/data.js';
import MediaCard from './components/employeecard.jsx'
import Container from '@mui/material/Container';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(data[1].firstName);
  return (
    <Container fixed>
     <MediaCard/> 
     <MediaCard/> 
     <MediaCard/> 
     <MediaCard/> 
     <MediaCard/> 
     <MediaCard/> 
     </Container>
  );
}

export default App
