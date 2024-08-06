import React, {useState} from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import {register} from 'api'
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try{
            const response = register(username, password)
            // Chuyển sang đăng ký
        }
        catch (error){
            console.log(error)
            setError("Có lỗi khi đăng ký")
        }
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Đăng ký</Typography>
            <form onSubmit={handleSubmit}>
                <TextField></TextField>
            </form>
        </Container>
    );
}