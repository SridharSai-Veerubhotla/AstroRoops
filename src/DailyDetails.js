import React from "react";
import { useLocation } from "react-router-dom";
import Moment from 'moment';
import Clock from 'react-live-clock';

export const DailyDetails = () => {
  const location = useLocation();
  console.log(location)
  
  const getTime = (f) =>{
    const d = new Date(f);
    return Moment(d).format('LT');    
  };

  const getDate = (f) =>{
    const d = new Date(f);
    return Moment(d).format('LL');    
  };

  const ispunarToDisplay =() =>{
    if((location.state.punarDurmuhurthamStartTime)!=null){
        return "card";
    }else{
        return "hideElement";
    }
  }
  

  return (
  
<div className="card">
    <div className="card-header custom-card-body custom-card-header">
    <h5 className="card-title">{getDate(location.state.date)}</h5>
    <h5 className="card-title"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></h5>
    <h5 className="card-title">{location.state.day}</h5>
    </div>
  <div class="row">

    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Sun</h5></div>
        <div className="card-body text-primary">            
            <div className="custom-card-body card-text">          
            <div>
                <p className="card-text">Rise</p>                 
                <p className="card-text">{getTime(location.state.sunRise)}</p>
            </div>
            <div>
                 <p className="card-text">Set</p>                 
                 <p className="card-text">{getTime(location.state.sunSet)}</p>
            </div>
            </div>
        </div>
    </div>

    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Moon</h5></div>
    <div className="card-body text-primary">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Rise</p>                 
                <p className="card-text">{getTime(location.state.moonRise)}</p>
            </div>
            <div>
                 <p className="card-text">Set</p>                 
                 <p className="card-text">{getTime(location.state.moonSet)}</p>
            </div>
        </div>
    </div>
    </div>

    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Raahu Kaalam</h5></div> 
    <div className="card-body text-danger">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Start</p>                 
                <p className="card-text">{getTime(location.state.rahuKalamStartTime)}</p>
            </div>
            <div>
                 <p className="card-text">Ends</p>                 
                 <p className="card-text">{getTime(location.state.rahuKalamEndTime)}</p>
            </div>
        </div>
    </div>
    </div>

    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Gulika Kaalam</h5></div> 
    <div className="card-body text-primary">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Start</p>                 
                <p className="card-text">{getTime(location.state.gulikaKalamStartTime)}</p>
            </div>
            <div>
                 <p className="card-text">Ends</p>                 
                 <p className="card-text">{getTime(location.state.gulikaKalamEndTime)}</p>
            </div>
        </div>
    </div>
    </div>


    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Yamakantaka Kaalam</h5></div> 
    <div className="card-body text-primary">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Start</p>                 
                <p className="card-text">{getTime(location.state.yamakantakaKalamStartTime)}</p>
            </div>
            <div>
                 <p className="card-text">Ends</p>                 
                 <p className="card-text">{getTime(location.state.yamakantakaKalamEndTime)}</p>
            </div>
        </div>
    </div>
    </div>

    <div className="card">  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Durmurtham</h5></div> 
    <div className="card-body text-danger">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Start</p>                 
                <p className="card-text">{getTime(location.state.durmuhurthamStartTime)}</p>
            </div>
            <div>
                 <p className="card-text">Ends</p>                 
                 <p className="card-text">{getTime(location.state.durmuhurthamEndTime)}</p>
            </div>
        </div>
    </div>
    </div>

    
    <div className={ispunarToDisplay()}>  
    <div className="card-header custom-card-body-header"><h5 className="card-title">Punar Durmurtham</h5></div> 
    <div className="card-body  text-danger">            
            <div className="custom-card-body card-text">
            <div>
                <p className="card-text">Start</p>                 
                <p className="card-text">{getTime(location.state.punarDurmuhurthamStartTime)}</p>
            </div>
            <div>
                 <p className="card-text">Ends</p>                 
                 <p className="card-text">{getTime(location.state.punarDurmuhurthamEndTime)}</p>
            </div>
        </div>
    </div>
    </div>

  </div>
  </div>);
};
