import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="blue-lizard.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blue Lizard Man
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are cool as fuck my guy
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Fuck yeah</Button>
        <Button size="small">Fuck no</Button>
      </CardActions>
    </Card>
  );
}