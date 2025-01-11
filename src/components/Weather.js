import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = ({ weather }) => {
    const getWeatherIcon = (description) => {
        if (description.includes('sun')) return <WbSunnyIcon style={{ fontSize: 50, color: '#FFA726' }} />;
        if (description.includes('rain')) return <UmbrellaIcon style={{ fontSize: 50, color: '#4FC3F7' }} />;
        if (description.includes('cloud')) return <CloudIcon style={{ fontSize: 50, color: '#90A4AE' }} />;
        if (description.includes('snow')) return <AcUnitIcon style={{ fontSize: 50, color: '#B3E5FC' }} />;
        return <CloudIcon style={{ fontSize: 50, color: '#90A4AE' }} />;
    };

    return (
        <Card className="shadow-sm" style={{ width: '100%', borderRadius: '15px', margin: '0 auto' }}>
            <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    {getWeatherIcon(weather.weather[0].description)}
                    <Typography variant="h5" component="h2" className="mt-2">
                        Weather in {weather.name}
                    </Typography>
                </Box>
                <Box mt={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Typography variant="body1" className="text-secondary">
                        Temperature: <strong>{weather.main.temp}°C</strong>
                    </Typography>
                    <Typography variant="body1" className="text-secondary">
                        Description: <strong>{weather.weather[0].description}</strong>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Weather;