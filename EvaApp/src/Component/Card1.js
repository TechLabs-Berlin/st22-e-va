import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"50px", top:"2000px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/o1rq5GwVorY"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://www.verywellfamily.com/what-maternity-leave-is-really-like-4054289">Maternity</a>            
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          Your days can start to feel extremely long and unorganized as you adjust to your new role as a mom...         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}