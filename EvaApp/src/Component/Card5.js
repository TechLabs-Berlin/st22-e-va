import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, backgroundColor: "#E4DADB", left:"100px", top:"2500px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/JtX2OR6bNAE"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://www.webmd.com/women/guide/vaginoplasty-and-labiaplasty-procedures">Vaginoplasty and Labiaplasty
</a>            
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          In order to decide if you should consider vaginoplasty or labiaplasty, it's important to understand the difference between reconstructive surgery and cosmetic surgery.

</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}