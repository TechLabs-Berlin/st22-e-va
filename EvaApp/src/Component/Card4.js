import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"1100px", top:"2000px", position:"absolute"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/jAVlGc_mUW4"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
          <a style={{textDecoration: 'none', color:"inherit"}} target="_blank" href="https://www.everydayhealth.com/sexual-health/living-with/better-sex-through-intimacy/">Sex and Intimicy</a>            
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
          Emotional intimacy can lead to better sexual experiences for many people, especially women.
</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}