import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSearch } from '../hooks/useSearch'; 

const Search = ({ 
  onSearch, 
  placeholder = 'Enter a city or keyword', 
  buttonText = 'Search', 
}) => {
  const { query, setQuery, handleSearch } = useSearch(onSearch);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2, 
        mb: 3,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch(); 
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '24px', 
          },
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          borderRadius: '24px', 
          textTransform: 'none', 
          padding: '10px 24px', 
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default Search;