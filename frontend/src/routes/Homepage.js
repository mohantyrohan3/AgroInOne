import React from 'react';
import Crop from "../components/buy/Crop/Crop"
import Banner from "../components/buy/Banner/Banner"
import { Container } from 'react-bootstrap';
import Header from '../components/buy/Header/Header';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <br/>
            <Container>
            <Banner></Banner>
            <Crop></Crop>
            </Container>
        </div>
    );
};

export default Homepage;