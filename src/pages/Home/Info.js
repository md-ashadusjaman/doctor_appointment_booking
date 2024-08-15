import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/clock.jpg';
import location from '../../assets/location.jpg';
import contact from '../../assets/contact.jpg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5"> 
        
        <InfoCard cardTitle="Opening Hours" bgClass="bg-secondary-content" img={clock}></InfoCard>
        <InfoCard cardTitle="Our Locations" bgClass="bg-secondary-content"img={location}></InfoCard>
        <InfoCard cardTitle="Contact Us" bgClass="bg-secondary-content" img={contact}></InfoCard>
        </div>
    );
};

export default Info;