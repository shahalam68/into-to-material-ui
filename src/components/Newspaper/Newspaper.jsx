import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles,setArticles] = useState([]);
    
    useEffect( () =>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e0de978d7a7941b4ac4333373325d010')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
            {
                articles.map(article => <Grid item xs={2} sm={4} md={4} >
                        <News article={article}></News>
                    </Grid>)
            }
        </Grid>
      </Box>
    );
};

export default Newspaper;