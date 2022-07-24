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
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://kidshealth.org/en/teens/irregular-periods.html">Irregular Period</a>            
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          Most girls get their first period between the ages of 10 and 15, but some get it earlier and some later.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}