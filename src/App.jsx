import { useState } from 'react'
import Title from './components/title.jsx'
import data from './data/data.js';
import MediaCard from './components/employeecard.jsx'
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


import './App.css'

function App() {

 const [ShowInactive, setShowInactive] = useState(false);

 const filteredData = ShowInactive ? data.filter((employee) => employee.onLeave) : data;

const handleToggle = (event) => {
  setShowInactive(event.target.checked);
  console.log (event.target.checked);
}

 console.log(ShowInactive);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h3"> Employees at Monkey Business </Typography>
      <Typography variant="p1" component="p1"> Whose on vacation? </Typography>
        <Switch {...label} checked={ShowInactive} onClick={handleToggle} />
     <MediaCard employee={filteredData}/>
     </Container>
  );
}

export default App
