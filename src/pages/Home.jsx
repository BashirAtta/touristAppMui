import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import TourCard from '../component/TourCard';
import { useNavigate } from 'react-router-dom';

import allData from "../component/data.json";



function Home(props){
  const [tourClicked,setTourClicked]=useState("");
  const navigate=useNavigate();

  function handleClick(tourId: number){
    
    navigate("/"+tourId);
    
  }
    return (<div className="App" >
  
      <Container sx={{marginY:7}}>
      {allData.cities.map((city)=>
      <>
      <Typography variant="h4" component="h2" marginTop={3} marginBotton={0}>
        Top {city.name} tours
      </Typography>
      <Grid container spacing={5} marginTop={0} >
      {city.tours.map((tour,index)=>
      <TourCard 

        onClick={ handleClick}
        tour={tour}
        Key= {index}
        
      />
      
      )}

        </Grid>
      </>
      
      )}
      
      </Container>
    </div>
  )
}

export default  Home;