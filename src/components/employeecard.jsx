import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';




export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="blue-lizard.jpg"
        title="green iguana"
      />
      <span class="material-icons-outlined">
        bug_report
      </span>
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