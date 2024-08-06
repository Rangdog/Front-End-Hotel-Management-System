import React, {useState} from "react";
import {TextField, Button, Container, Typography} from '@mui/material'
import {login} from 'api'
const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try{
            const response = login(username, password);
            localStorage.setItem('token', response.jwt)
        }
        catch(error){
            console.log(error)
            setError("Có lỗi")
        }
    }
    return(
        <Container maxWidth="sm">
            <Typography variant="h4">Đăng nhập</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label = "Tên đăng nhập "
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField 
                    label="Mật khẩu"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color = "primary">Đăng nhập</Button>
            </form>
        </Container>
    );
}