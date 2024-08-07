import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    const handleLogout = () =>{
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    const isAuthenticated = !localStorage.getItem('token')
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' style={{flexGrow:1}}>
                    Hotel Booking
                </Typography>
                <Button color='inherit' component ={Link} to = "/">
                    Home
                </Button>
                {isAuthenticated ? <>
                    <Button color='inherit' onClick={handleLogout}>Logout</Button>
                </>:<>
                    <Button color='inherit' component={Link} to = "/login">Login</Button>
                    <Button color='inherit' component={Link} to = "/register">Register</Button>
                </>}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar