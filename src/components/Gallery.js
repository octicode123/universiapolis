import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination, Skeleton, Card, CardMedia, CardContent, Button, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { usePagination } from '../hooks/usePagination'; 

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows ? theme.shadows[10] : '0px 4px 20px rgba(0, 0, 0, 0.2)',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #000000, #3f454d)',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    },
}));

const Gallery = ({ images, isLoading }) => {
    const navigate = useNavigate();
    const imagesPerPage = 6;

    const { currentPage, currentItems, handlePageChange, totalPages } = usePagination(images, imagesPerPage);

    const handleDetailsClick = (city) => {
        navigate('/details', { state: { city } });
    };

    const renderSkeleton = () => {
        return Array.from({ length: imagesPerPage }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                    <Skeleton variant="rectangular" height={200} animation="wave" />
                    <CardContent>
                        <Skeleton variant="text" width="80%" animation="wave" />
                        <Skeleton variant="text" width="100%" animation="wave" />
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                        <Skeleton variant="rectangular" width="100%" height={38} animation="wave" />
                    </Box>
                </StyledCard>
            </Grid>
        ));
    };

    return (
        <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
            <Grid container spacing={4}>
                {isLoading ? renderSkeleton() : (
                    currentItems.map((image) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                            <StyledCard>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.webformatURL}
                                    alt={image.tags}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                                        {image.tags.split(',')[0]}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" fontStyle="italic">
                                        {image.tags}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ p: 2 }}>
                                    <StyledButton
                                        variant="contained"
                                        fullWidth
                                        onClick={() => handleDetailsClick(image.tags.split(',')[0])}
                                    >
                                        See Details
                                    </StyledButton>
                                </Box>
                            </StyledCard>
                        </Grid>
                    ))
                )}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    sx={{
                        '& .MuiPaginationItem-root': {
                            fontSize: '1rem',
                            '&.Mui-selected': {
                                fontWeight: 'bold',
                                transform: 'scale(1.2)',
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Gallery;