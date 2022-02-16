import React from 'react';
import './Flight.css'

const Flight = ({item}) => {
    return (
        <div  className={'FlightDiv'} key={item.flight_number}>
            {item.launch_year} -
            {item.mission_name}
            <img src={item.links.mission_patch} alt="patch"/>
        </div>
    );
};

export default Flight;