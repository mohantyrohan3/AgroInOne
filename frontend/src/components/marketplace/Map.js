import React ,{useEffect,useState} from 'react'
import GoogleMapReact from 'google-map-react';
import { GoogleMap , Marker, InfoWindow , MarkerF } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material';
import Rating from '@mui/lab/Rating';
import "./mapstyles.css"
import Container from 'react-bootstrap/Container';
import { useJsApiLoader } from '@react-google-maps/api';
import logo from "../../images/logo.png"
import data from "../../api/placeDetails.json";



export default function Map1() {

    

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyBbPqlbQ8IBPrOR_ERQWz6SKPJVx-MWg6s",
        libraries: ['places'],
    })

    const [currentLocation, setCurrentLocation] = useState({});
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
            
          },
          error => console.log(error)
        );
      }, []);

      useEffect(() => {
        if (currentLocation.lat && currentLocation.lng) {
          const service = new window.google.maps.places.PlacesService(GoogleMap.current);
          const request = {
            location: currentLocation,
            radius: 1000000, // in meters
            type: ['restaurant'] // or any other type of place you want to search
          };
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setPlaces(results);
            }
          });
        }
      }, [currentLocation]);





const matches = useMediaQuery('(min-width:600px)');
    
    if (!isLoaded) {
        return <h1>Not Loaded</h1>
    }
  
  return (
    <>
    <Container>
            <div className="mapContainer" >


                    <GoogleMap
                    mapContainerStyle={{ height: '100%', width: '100%' }}
                    zoom={16}
                    center={data[0].Loaction}
                    onLoad={map => {
                        GoogleMap.current = map;
                    }}
                    >
                    {data.map(place => (
                        <Marker
                        // key={place.Name}
                        position={place.Loaction}
                        onClick={() => {
                            setSelectedPlace(place);
                        }}
                        />
                    ))}
                    {selectedPlace && (
                        <InfoWindow
                        position={selectedPlace.Loaction}
                        onCloseClick={() => {
                            setSelectedPlace(null);
                        }}
                        >
                        <div className='container d-flex justify-content-center'>
                                <Paper elevation={3} className="paper">
                                <Typography className="typography" variant="subtitle2" gutterBottom> {selectedPlace.Name}</Typography>
                                <img
                                    className="pointer"
                                    src={'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                />
                                <Rating name="read-only" size="small" value={selectedPlace.Rating} readOnly />
                                </Paper>
                        </div>
                        </InfoWindow>
                    )}
                    </GoogleMap>




           





           



{/* <GoogleMap
  mapContainerStyle={{ height: '100vh', width: '100%' }}
  zoom={14}
  center={currentLocation}
  onLoad={map => {
    GoogleMap.current = map;
  }}
>
  {places.map(place => (
    <Marker
      key={place.place_id}
      position={place.geometry.location}
      onClick={() => {
        setSelectedPlace(place);
      }}
    />
    
  ))}

    
  {selectedPlace &&(
    <InfoWindow
      position={selectedPlace.geometry.location}
      onCloseClick={() => {
        setSelectedPlace(null);
      }}
    >
      <div>
        <h3>{selectedPlace.name}</h3>
        <p>{selectedPlace.vicinity}</p>
      </div>
    </InfoWindow>
  )}
</GoogleMap> */}











            </div>


    </Container>
    </>
  )
}
