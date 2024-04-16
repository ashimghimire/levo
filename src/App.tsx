import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import axios from 'axios';
import Loading from './Components/Loading';


function App() {
  const [loc,setLoc]=useState<any>();
   const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true);
        let getLocation:(lat: Number, lon: Number) => any= async(lat,lon)=>{
            try {
            const response=await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=033b98088e01d9e685776985f447f3b9`,
            );
            if (!response) {
                throw new Error('Failed to fetch location data');
            }
            const res= await response.data;
            
            return res;
        }
        catch(error){
            //@ts-ignore
            console.error('Error fetching location data:',error?.message );
            throw error;
        }
        }

        if ("geolocation" in navigator) {
            const WatchId=navigator.geolocation.watchPosition(async (position)=>{
                const response= await getLocation(position.coords?.latitude,position.coords?.longitude);
               
                setLoc(response);
                setLoading(false);

            });
            return ()=>{
                navigator.geolocation.clearWatch(WatchId);
              }
          } else {
            console.log("geolocation is not valid ")
          }
          
    },[]);
  return (
    <div className="container">
      {!loading &&
      <div className="container-wrapper">
        <Sidebar loc={loc}/>
        <Main loc={loc}/>
      </div>
      }
      {loading && <Loading/>} 
    </div>
  );
}

export default App;
