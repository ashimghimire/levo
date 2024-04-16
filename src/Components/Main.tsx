/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode, useEffect, useRef, useState } from 'react';
//@ts-ignore
const Main = ({loc}) => {
    const [currentWeather, setCurrentWeather]=useState([]);
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toggle=(type:String)=>{
        if(type==='today'){
            //@ts-ignore
            
            setCurrentWeather(loc?.hourly);
            setActive2(false);
            setActive1(true);
            //@ts-ignore
           
        }
    }
    function getTime(dt: any): ReactNode {
        let curr=new Date();
        curr.setTime(dt*1000)
        //@ts-ignore
        return <p>{curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds()}</p>;
        
    }
    useEffect(()=>{
        toggle('today');
    },[loc]);

    
    return (
        <div className="main">
            <div className="main-top-bar pt-2 ps-2">
            <div  className={`tab ${active1===true?'active':''}`} onClick={()=>toggle('today')}>Today</div>
            {/* <div  className={`tab ${active2===true?'active':''}`} onClick={()=>toggle('daily')} >This week</div> */}
            </div>
       
                <div className="S-wrapper pt-3 ps-2 pe-2">
                    
                    {currentWeather?.map((item:any)=>{
                        return ( <div className="item card">
                           
                            <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`}/>
                            <p>{item?.temp}°F<br/> {item?.weather[0]?.main}<br/> {getTime(item?.dt)}</p>
                            
                            
                        </div>
                        )
                    })}
           
            </div>
            </div>
    
    );
};

export default Main;