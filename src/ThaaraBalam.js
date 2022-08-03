import React from 'react'
import { useLocation } from 'react-router-dom'

export const ThaaraBalam = () => {
    const location=useLocation();

    let header_color="";
    if(location.state.good==true){
        header_color="card-title text-success";
    }else{
        header_color="card-title text-danger";
    }

  return (
    <div>
        <div className="card">  
        <div className="card-header custom-card-body-header"><h5 className={header_color}>{location.state.thaara} Thaara</h5></div>
       <div className="card-body text-primary">            
           <div className="custom-card-body card-text">          
           <div>                             
               <p className="card-text">{location.state.fromNakshatra}</p>
           </div>
           <div>                            
               <p className="card-text">{location.state.toNakshatra}</p>
           </div>
           
           </div>
       </div>
   </div>


    </div>
  )
}
