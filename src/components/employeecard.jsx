import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({ employee }) {
  console.log(employee);
  return (
    <>
      {employee.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "contain", margin: 1 }}
            image={`/react-employee-app/${item.image}`}
            title="profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.firstName} {item.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.position}
            </Typography>
          </CardContent>

          <Stack>
          {item.skills.map((skill, skillIndex) => (
            <Chip 
             varient= "outlined"
             sx= {{marginTop: "10px" }}
             key={skillIndex}
             label={skill}
            />
            ))} 
          </Stack>
          <CardActions>
            <Button size="small">Fire</Button>
            <Button size="small">Promote</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}