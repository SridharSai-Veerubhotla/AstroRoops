import React from 'react';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Moment from 'moment';
import Clock from 'react-live-clock';

export const HoraDetails = () => {
    const location = useLocation();    
    const [horaDetails, setHoraDetails] = useState([24]);    
     for(var i=0;i<location.state.horaList.length;i++){
      if(i==0){
        horaDetails.splice(0,24);
      }
       horaDetails.push(location.state.horaList[i]);
     }
    const getTime = (f) =>{
      const d = new Date(f);
      return Moment(d).format('LT');    
    };
  
    const getDate = (f) =>{
      const d = new Date(f);
      return Moment(d).format('LL');    
    };


    const getHoraCard=(horaDetails,index)=>{


     if(index==undefined){
      return "";
     }else{

      const isInBetween=Moment(new Date()).isBetween(Moment(horaDetails.startTime),Moment(horaDetails.endTime));
      let body_Color="";            
      if(isInBetween){
        body_Color=" card-body text-warning";
      }else{
        body_Color=" card-body text-primary";                
      }


      return (
        <div className="card" key={indexedDB}>  
        <div className="card-header custom-card-body-header"><h5 className="card-title">{horaDetails.hora} Hora</h5></div>
       <div className={body_Color}>            
           <div className="custom-card-body card-text">          
           <div>
               <p className="card-text">Start</p>                 
               <p className="card-text">{getTime(horaDetails.startTime)}</p>
           </div>
           <div>
               <p className="card-text">Mid</p>                 
               <p className="card-text">{getTime(horaDetails.midTime)}</p>
           </div>
           <div>
                <p className="card-text">End</p>                 
                <p className="card-text">{getTime(horaDetails.endTime)}</p>
           </div>
           </div>
       </div>
   </div>
      );
     }
    }

  

  return (
    <div className="">
      <div className="card">
         <div className="card-header custom-card-body custom-card-header">
          <h5 className="card-title">{getDate(location.state.date)}</h5>   
          <h5 className="card-title"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></h5> 
          <h5 className="card-title">{location.state.day}</h5>
      </div>
    </div>
      <div className="row">
        {horaDetails.map(hora =>getHoraCard(hora,hora.id))}
      </div>
    </div>
  )
}
