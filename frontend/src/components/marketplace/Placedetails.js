import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import Rating from '@mui/lab/Rating';

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
      <Box display="flex" justifyContent="space-between" my={2}>
        {/* <Rating name="read-only" value={Number(props.shop.Rating)} readOnly /> */}
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* <Typography component="legend">Price</Typography> */}
        {/* <Typography gutterBottom variant="subtitle1">
          {place.price_level}
        </Typography> */}
      </Box>
      {/* <Box display="flex" justifyContent="space-between">
        <Typography component="legend">Ranking</Typography>
        <Typography gutterBottom variant="subtitle1">
          {place.ranking}
        </Typography>
      </Box> */}
      {/* {place?.awards?.map((award) => (
        <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
          <img src={award.images.small} />
          <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
        </Box>
      ))}
      {place?.cuisine?.map(({ name }) => (
        <Chip key={name} size="small" label={name} className={classes.chip} />
      ))}
      {place.address && (
        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
          <LocationOnIcon />{place.address}
        </Typography>
      )}
      {place.phone && (
        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
          <PhoneIcon /> {place.phone}
        </Typography>
      )} */}
    </CardContent>
    <CardActions>
      <Button size="small" color="primary"
    //    onClick={() => window.open(place.web_url, '_blank')}
      >
       BUY NOW
      </Button>
    </CardActions>
  </Card>
  <br/>
  </>
  )
}
