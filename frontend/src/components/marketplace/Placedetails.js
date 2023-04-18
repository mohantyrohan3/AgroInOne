import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import Rating from '@mui/lab/Rating';
import PhoneIcon from '@mui/icons-material/Phone'
import { Link } from 'react-router-dom';

export default function Placedetails(props) {
  return (
    <>
    <Card elevation={6}>
    <CardMedia
      style={{ height: 350 }}
      image={props.shop.Picture}
      title={props.shop.Name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{props.shop.Name}</Typography>
  
      <Box display="flex" justifyContent="center">
        <Typography component="legend">NAME</Typography>
        {/* <Typography gutterBottom variant="subtitle1"> */}
          {props.shop.Owner}
        {/* </Typography> */}
      </Box>
        <Typography variant="body2" color="textSecondary" className="spacing">
          <PhoneIcon /> {props.shop.Phone}
        </Typography>
    </CardContent>
    <CardActions>
      <Link to="/marketplace">
      <Button size="small" color="primary">
       BUY NOW
      </Button>
      </Link>
    </CardActions>
  </Card>
  <br/>
  </>
  )
}
