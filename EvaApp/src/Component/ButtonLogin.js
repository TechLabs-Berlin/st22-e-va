import { Button } from '@mui/material/';
import { Link } from 'react-router-dom';
  
const ButtonLogin = () => {
    return (
        <Button     sx={{position: "absolute",
        left: "1300px",
        top: "20px",
        textTransform: "none",
        fontFamily: "Avenir Next",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "25px",
        lineHeight: "150%",
        
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        
        color: "#C46471",}}
        
        ><Link style={{textDecoration: 'none', color:"inherit"}} to="/login">Log In</Link></Button>
        
    )
}

export default ButtonLogin