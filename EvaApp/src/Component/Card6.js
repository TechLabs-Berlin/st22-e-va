import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, backgroundColor: "#E4DADB", left:"750px", top:"2500px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/Av_NirIguEc"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://www.healthline.com/health/womens-health/long-periods">Causes of long periods </a>
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          Generally, a period lasts between three to seven days. A menstrual period that lasts longer than seven days is considered a long period.
</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}