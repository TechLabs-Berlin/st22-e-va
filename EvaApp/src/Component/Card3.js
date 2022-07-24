import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"750px", top:"2000px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/fhWNnHmW40Y"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
            Irregular period
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}