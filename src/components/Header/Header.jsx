import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import DropMenu from '../DropMenu/DropMenu'



function Header() {

    const history = useHistory();

    const handleAdmin = () => {
        history.push('/admin')
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <DropMenu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Daily Feedback!
                    </Typography>
                    <Button color="inherit" onClick={handleAdmin}>Admin</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Header;