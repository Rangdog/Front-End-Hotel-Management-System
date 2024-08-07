import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
                Welcome to Hotel Booking
            </Typography>
            <Typography variant="body1" align="center">
                Find the best hotels for your stay.
            </Typography>
            {/* Có thể thêm danh sách khách sạn ở đây */}
        </Container>
    );
};

export default Home;