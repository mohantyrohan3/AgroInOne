import React from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Container from 'react-bootstrap/esm/Container';
import PlaceDetails from './Placedetails';
import data from "../../api/placeDetails.json";

export default function List() {

  const places = [
    {name:'Rohan'},
    {name:'Kumar'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    {name:'Mohanty'},
    
  ]



  const classes = (theme)=>({
    formControl: {
      margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    loading: {
      height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
      padding: '25px',
    },
    marginBottom: {
      marginBottom: '30px',
    },
    list: {
      height: '75vh', overflow: 'auto',
    }
  });



  return (
    <>
    <Container>
      

  {data?.map((shop, i) => (
    <>
    <PlaceDetails shop={shop} />
    <br/>
    </>
  ))}
  




    </Container>
    </>
  )
}
