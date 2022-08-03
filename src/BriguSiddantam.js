import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import {useParams} from "react-router-dom";
import Moment from 'moment';
import Clock from 'react-live-clock';

const BriguSiddantam = () => {
    const location = useLocation();
    console.log(location.state.dayTimeGhadia);
    console.log(location.state.nightTimeGhadiaDetails);
    const [dayTimeGhadiaDetails, setDayTimeGhadiaDetails] = useState([30]);    
    const [nightTimeGhadiaDetails, setNightTimeGhadiaDetails] = useState([30]);    

        for(var i=0;(i<location.state.dayTimeGhadia.length);i++){
            if(i==0){
                dayTimeGhadiaDetails.splice(0,30);
                nightTimeGhadiaDetails.splice(0,30);
            }
            dayTimeGhadiaDetails.push(location.state.dayTimeGhadia[i]);
            nightTimeGhadiaDetails.push(location.state.nightTimeGhadia[i]);
          }
  

    const getTime = (f) =>{
        const d = new Date(f);
        return Moment(d).format('LT');    
      };
    
      const getDate = (f) =>{
        const d = new Date(f);
        return Moment(d).format('LL');    
      };


      const getGhadiaDetails=(ghadia,index)=>{
        if(index==undefined){
            return "";
           }else{         
            var o=ghadia.resultGood;
            var header_color="";
            var body_Color="";          
            
            const isInBetween=Moment(new Date()).isBetween(Moment(ghadia.startTime),Moment(ghadia.endTime));
            

            if(o==true){
                header_color="card-title text-success";
                body_Color="card-text";
            }else{
                header_color="card-title text-danger";
                body_Color=" card-text";
            }
            if(isInBetween){
                body_Color=" card-text text-warning";
            }else{
                body_Color=" card-text text-primary";                
            }

            return (
              <div className="card col-12" key={indexedDB}>  
              <div className="card-header custom-card-body-header"><h5 className={header_color}>{ghadia.ghadiaResult}</h5></div>
             <div className="card-body">            
                 <div className="custom-card-body card-text">          
                 <div>                                
                     <p className={body_Color}>{getTime(ghadia.startTime)}</p>
                 </div>
                 <div>                                    
                     <p className={body_Color}>{getTime(ghadia.midTime)}</p>
                 </div>
                 <div>                                 
                      <p className={body_Color}>{getTime(ghadia.endTime)}</p>
                 </div>
                 </div>
             </div>
         </div>
            );
           }
          }
          const [dayLabel,setDayLabel]=useState("Day");
          const [dayClass,setDayClass]=useState("row");
          const [nightClass,setNightClass]=useState("hideElement");
          
       const onChangeHandler=(e)=>{
            if(e.target.checked){
                setDayLabel("Night");   
            }else{
                setDayLabel("Day");
            }
       }

      

  return (
    <div>

        <div class="form-check form-switch m-3">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={onChangeHandler}/>
            <label class="form-check-label">{dayLabel}</label>
        </div>


     <div className="card">
         <div className="card-header custom-card-body custom-card-header">
          <h5 className="card-title">{getDate(location.state.date)}</h5>    
          <h5 className="card-title"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></h5>
          <h5 className="card-title">{location.state.day}</h5>
      </div>


       

    {dayLabel === 'Day' ? 
    <div id="dayTimeDetails" className="row">             
      {dayTimeGhadiaDetails.map(day =>getGhadiaDetails(day,day.id))}
    </div>
    : 
    <div id="nightTimeDetails" className="row">             
      {nightTimeGhadiaDetails.map(day =>getGhadiaDetails(day,day.id))}
    </div>
    }

    

    

  </div>
  </div>
  )
}

export default BriguSiddantam