import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} className="borde"> 
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Meteor Wallet
                    </Typography>
                    <Button color="warning" variant="contained" >Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
}