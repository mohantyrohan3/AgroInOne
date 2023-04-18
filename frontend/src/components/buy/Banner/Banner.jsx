import React from 'react';
import './Banner.css';
import { Wave } from 'react-animated-text';
import "../../../App.css"



const Banner = () => {
    return (
        <div>
            <section className="banner-area">
                    <h2 className='marketplace-heading'>
                    <Wave text="WELCOME TO OUR MARKETPLACE" />
                    </h2>
        
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_CgexnTerux.json"  background="transparent"  speed="1"  style={{width: "auto", height: "400px"}}  loop  autoplay></lottie-player>
            </section>
        </div>
    );
};

export default Banner;