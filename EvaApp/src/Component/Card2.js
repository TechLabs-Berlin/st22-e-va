import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"400px", top:"2000px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/uFVPf9zh17U"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://www.bbc.com/future/article/20160630-the-enduring-enigma-of-female-desire">Mature Sexuality</a>            
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          Why have scientists been slow to understand women's sexuality, asks Rachel Nuwer.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}