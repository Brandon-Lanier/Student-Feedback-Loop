import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DropMenu from '../DropMenu/DropMenu'


function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <DropMenu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Daily Feedback!
                    </Typography>
                    <img src="images/prime.png"></img>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Header;