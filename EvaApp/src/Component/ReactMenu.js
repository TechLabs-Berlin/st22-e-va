import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function ReactMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button sx={{left: "20px", top:"20px", color:"#C46471", fontFamily: "Avenir Next", textTransform: "none", fontSize: "20px"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        E-va Menu 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Link style={{textDecoration: 'none', color:"inherit"}}to="/signup">Sign Up</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/login">Log In</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/health">Health</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/periodtracker">Period Tracker</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/survey">Survey</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/rateus">Rate Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color:"inherit"}} to="/contactus">Contact Us</Link></MenuItem>

      </Menu>
    </div>
  );
}
