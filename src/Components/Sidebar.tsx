/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode} from 'react';

//@ts-ignore
const Sidebar = ({loc}) => {
    
    function getDay(dt: any): ReactNode {
        let curr=new Date();
        curr.setTime(dt*1000)
        if(curr.getDay()===0){
            return "Sunday";
        }
        if(curr.getDay()===1){
            return "Monday";
        }
        if(curr.getDay()===2){
            return "Tuesday";
        }
        if(curr.getDay()===3){
            return "Friday";
        }
        if(curr.getDay()===4){
            return "Saturday";
        }
        //@ts-ignore
        return <div className="subtitle">{curr.getDay()}</div>;
        
    }

    //  const getDay=(date:Long)=>{

    // }
    return (
        <div className='sidebar'>
            <div className="top pt-3 pl-3"><h2 className='ps-2'>Current Weather at {loc?.timezone} </h2></div>
            <img src={`https://openweathermap.org/img/wn/${loc?.current?.weather[0]?.icon}@4x.png`} className='img-fluid' width={300}/>
            <p className='text-danger display-6 d-flex align-items-center justify-content-center'>{loc?.current?.weather[0]?.main}</p>
            <div className="divider"></div>
            <div className="titleWrapper">
                <div className="title">{loc?.current?.temp}°F</div>
               {getDay(loc?.current?.dt)}
            </div>
            <div className="divider"></div>
            <ul className='pt-2'>
                <li>Weather Condition: <strong> {loc?.current?.weather[0]?.description}</strong></li>
                <li>Humidity: <strong>{loc?.current?.humidity}</strong></li>
                <li>Wind Speed(m/s): <strong>{loc?.current?.wind_speed}</strong></li>
               
            </ul>
            
        <div className="footer-image"><img src='https://www.thamserkutrekking.com/images/cnceverest/place/170913070106pashupati-banner.jpg' className='img-fluid'/>
        
        <div className="footer-text text-white">This is custom placeholder</div> 
        </div></div>
        
    );
};

export default Sidebar;