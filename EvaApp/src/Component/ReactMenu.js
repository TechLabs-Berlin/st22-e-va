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
        <MenuItem onClick={handleClose}> <Link color="inherit" href="http://localhost:3000/signup">
        www.eva.com
      </Link>Sign Up</MenuItem>
        <MenuItem onClick={handleClose}>Log In</MenuItem>
        <MenuItem onClick={handleClose}>Health</MenuItem>
        <MenuItem onClick={handleClose}>Period Tracker</MenuItem>
        <MenuItem onClick={handleClose}>Survey</MenuItem>
        <MenuItem onClick={handleClose}>Rate Us</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>

      </Menu>
    </div>
  );
}
