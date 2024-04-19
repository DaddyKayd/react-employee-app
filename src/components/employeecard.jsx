import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({employee}) {
  console.log(employee);
  return (
    <Card sx={{ maxWidth: 1045, margin:10, padding: 3 }}>
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain', margin: 3 }}
        image= {employee[0].image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {employee[0].firstName} {employee[0].lastName} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee[0].department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {employee[0].position}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>

      <CardActions>
        <Button size="large">Fuck yeah</Button>
        <Button size="small">Fuck no</Button>
      </CardActions>
    </Card>
  );
}