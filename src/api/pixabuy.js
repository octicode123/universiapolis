import axios from 'axios';
import { PIXABAY_BASE_URL } from './configs';

export const searchImages = async (query) => {
  try {
    const response = await axios.get(PIXABAY_BASE_URL, {
      params: {
        //key: process.env.REACT_APP_PIXABAY_API_KEY, 
        key : '48149212-50ca4c5ae5e230f2da90acd29',
        q: query,
        per_page: 50, 
        image_type: 'photo',
      },
    });

    if (response.data && response.data.hits) {
      return response.data.hits;
    } else {
      throw new Error('No images found');
    }
  } catch (error) {
    console.error('API Error:', error); 

    if (error.response) {
    
      throw new Error(`Image search failed: ${error.response.data.message || 'Server error'}`);
    } else if (error.request) {
      throw new Error('No response from image server');
    } else {
      throw new Error(`Image search error: ${error.message}`);
    }
  }
};