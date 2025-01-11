import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../hooks/useSearch'; // Import the custom hook

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },
  marginLeft: 0,
  width: '100%',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width', { duration: '0.3s' }),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
}));

const Navbar = ({ onSearch, title = 'Image and Weather App' }) => {
  const { query, setQuery, handleSearch } = useSearch(onSearch);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'linear-gradient(145deg,rgb(0, 0, 0),rgb(39, 50, 68))',
          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' }, 
              fontWeight: 700, 
              letterSpacing: '0.05em',
              fontSize: '1.2rem',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleSearch}
            />
          </Search>
          <IconButton
            color="inherit"
            aria-label="search"
            onClick={handleSearch}
            sx={{ ml: 1 }}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;