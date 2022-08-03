import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Moment from "moment";
import Geolocation from 'react-native-geolocation-service';
import { HomePage } from "./HomePage";


export const Input = () => {
  let ghadiaUrl = "http://192.168.1.9:8080/astroroops/getGhadiaDetails";
  let horaUrl = "http://192.168.1.9:8080/astroroops/getHoraDetails";
  let thaaraUrl = "http://192.168.1.9:8080/astroroops/getThaaraBalam";
  let navigate = useNavigate();
  
  const nakshatraList=['Select','Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushyami','Ashlesha','Magha','Purva Phalguni(Pubba)','Uttara Phalguni(Uttara)','Hastha','Chitta','Swati','Vishakha','Anuradha','Jyeshtha','Moola','Purvashadha','Uttarashadha','Shravana','Dhanishtha','Shatabhisha','Purvabhadrapada','Uttara Bhadra','Revati'];
  const [fromNakshatra,setFromNakshatra] =useState("");
  const [toNakshatra,setToNakshatra] =useState("");

  const [data, setData] = useState({
    latitude: "",
    longitude: "",
    date: "",
    sunRise: "",
    sunSet: "",
    day: "",
    moonRise: "",
    moonSet: "",
    rahuKalamStartTime: "",
    rahuKalamEndTime: "",
    gulikaKalamStartTime: "",
    gulikaKalamEndTime: "",
    yamakantakaKalamStartTime: "",
    yamakantakaKalamEndTime: "",
    durMuhurthamStartTime: "",
    durMuhurthamEndTime: "",
    punarDurmuhurthamStartTime: "",
    punarDurmuhurthamEndTime: "",
  });

   

  const [dayTimeGhadia, setDayTimeGhadia] = useState([]);
  const [nightTimeGhadia, setNightTimeGhadia] = useState([]);
  const [horaDetails, setHoraDetails] = useState([]);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      latitude: data.latitude,
      longitude: data.longitude,
      date: data.date,
    }),
  };

  const thaaraOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fromNakshtra: fromNakshatra,
      toNakshatra: toNakshatra     
    }),
  };


  const getThaaraBalamDetails =() =>{
    return fetch(thaaraUrl,thaaraOptions)
    .then(response=>response.json())      
  }

  const getHoraDetails =() =>{
    return fetch(horaUrl,requestOptions)
    .then(response=>response.json())      
  }

  const getDetails = () =>{
    return fetch(ghadiaUrl, requestOptions)
      .then((response) => response.json())
  }

  const getGhadiaDetails = () => {
    return fetch(ghadiaUrl, requestOptions)
      .then((response) => response.json())
    
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  const submitGhadiaHandler = (e) => {
    e.preventDefault();
    getGhadiaDetails().then((json) =>{
      document.getElementById("sukraSiddantam").classList.remove("show", "d-block");
      document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
      console.log(json.dayTimeGhadiaDetails);
      navigate('/BriguSiddantam',{state:{date:json.date,day:json.day,dayTimeGhadia:json.dayTimeGhadiaDetails,nightTimeGhadia:json.nightTimeGhadiaDetails}});
    })
  };

  const submitDetailsHandler = (e) => {
    e.preventDefault();
    getDetails().then(
      (json) => {        
        document.getElementById("todaysDetails").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
    navigate('/Details',{state:{day:json.day,date:json.date,sunRise:json.sunRise,sunSet:json.sunSet,moonRise:json.moonRise,moonSet:json.moonSet,rahuKalamStartTime:json.rahuKalamStartTime,rahuKalamEndTime:json.rahuKalamEndTime,gulikaKalamStartTime:json.gulikaKalamStartTime,gulikaKalamEndTime:json.gulikaKalamEndTime,yamakantakaKalamStartTime:json.yamakantakaKalamStartTime,yamakantakaKalamEndTime:json.yamakantakaKalamEndTime,durmuhurthamStartTime:json.durmuhurthamStartTime,durmuhurthamEndTime:json.durmuhurthamEndTime,punarDurmuhurthamStartTime:json.punarDurmuhurthamStartTime,punarDurmuhurthamEndTime:json.punarDurmuhurthamEndTime}});
    
      })   
  };

  const submitThaaraHandler=(e)=>{
    e.preventDefault();
    getThaaraBalamDetails().then(
      (json)=>{
        document.getElementById("tharaBalam").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        console.log(json.thaara);
        navigate('/ThaaraBalam',{state:{fromNakshatra:json.fromNakshatraName,toNakshatra:json.toNakshatraName,thaara:json.thaara,good:json.good}})
      }
    )


  }


  const getLocation =() =>{
    Geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.accuracy)
      setData({latitude:position.coords.latitude,longitude:position.coords.longitude});
    },(error)=>{
      console.log(error.code, error.message);
    },{
      enableHighAccuracy:true,timeout:15000,maximumAge:10000
    });
    
  };

  const getCurrentDate=()=>{      
      data.date=new Date();
  }

  const submitHoraHandler = (e) => {
    e.preventDefault();
    getHoraDetails().then((json) =>{
      document.getElementById("horaDetails").classList.remove("show", "d-block");      
      document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
      navigate('/HoraDetails',{state:{horaList:json.horaList,date:json.date,day:json.day}});
    })

   
  

  };

  const getThaaraList=(nakshatra,index)=>{
    return (
      <option value={index} key={index}>{nakshatra}</option>
    )
  };

  const onChangeFromNakshatraHandler=(e)=>{
    setFromNakshatra(e.target.value);
  }

  const onChangeToNakshatraHandler=(e)=>{
    setToNakshatra(e.target.value);
  }
  


  return (

    <div>

      

    <div className="card w-md-25 w-sm-100">
       <div  className="modal fade" id="todaysDetails"  aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button  type="button"  className="btn-close"  data-bs-dismiss="modal"  aria-label="Close"></button>
            </div>

            <form onSubmit={submitDetailsHandler}>
              <div className="modal-body">

                <div className="form-group mb-3">                  
                  <input type="text"  className="form-control w-100 p-3"  id="latitude"  name="latitude" value={data.latitude}  placeholder="Latitude" onChange={changeHandler} required/>                                    
                </div> 



                <div className="form-group mb-3">
                  <input type="text" className="form-control w-100 p-3" id="longitude" value={data.longitude}  name="longitude" placeholder="Longitude"  onChange={changeHandler} required/>                  
                </div>

                <div className="form-group mb-3">
                  <button className="btn btn-primary w-50 p-3" onClick={getLocation}>Auto Detect</button>
                </div>

                <div className="form-floating mb-3" data-provide="datepicker">
                  <input  type="date"  id="date"  className="form-control w-100 p-3"  name="date"  onChange={changeHandler} required/>                  
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100 p-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div  className="modal fade"  id="sukraSiddantam"   aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button  type="button"  className="btn-close"  data-bs-dismiss="modal"  aria-label="Close"></button>
            </div>

            <form onSubmit={submitGhadiaHandler}>
              <div className="modal-body">

                <div className="form-group mb-3">                  
                  <input type="text"  className="form-control w-100 p-3"  id="latitude" value={data.latitude} name="latitude"  placeholder="Latitude" required onChange={changeHandler}/>                  
                </div>

                <div className="form-group mb-3">
                  <input type="text" className="form-control w-100 p-3" id="longitude" value={data.longitude} name="longitude" placeholder="Longitude"  required onChange={changeHandler}/>                  
                </div>

                <div className="form-group mb-3">
                  <button className="btn btn-primary w-50 p-3" onClick={getLocation}>Auto Detect</button>
                </div>

                <div className="form-floating mb-3" data-provide="datepicker">
                  <input  type="date"  id="date"  className="form-control w-100 p-3"  name="date" required onChange={changeHandler}/>                  
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100 p-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div  className="modal fade"  id="horaDetails"   aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button  type="button"  className="btn-close"  data-bs-dismiss="modal"  aria-label="Close"></button>
            </div>

            <form onSubmit={submitHoraHandler}>
              <div className="modal-body">

              <div className="form-group mb-3">                  
                  <input type="text"  className="form-control w-100 p-3"  id="latitude" value={data.latitude} name="latitude" required placeholder="Latitude" onChange={changeHandler}/>                  
                </div>

                <div className="form-group mb-3">
                  <input type="text" className="form-control w-100 p-3" id="longitude" value={data.longitude} name="longitude" required placeholder="Longitude"  onChange={changeHandler}/>                  
                </div>

                <div className="form-group mb-3">
                  <button className="btn btn-primary w-50 p-3" onClick={getLocation}>Auto Detect</button>
                </div>

                <div className="form-floating mb-3" data-provide="datepicker">
                  <input  type="date"  id="date"  className="form-control w-100 p-3"  name="date" required onChange={changeHandler}/>                  
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100 p-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div  className="modal fade"  id="tharaBalam"   aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button  type="button"  className="btn-close"  data-bs-dismiss="modal"  aria-label="Close"></button>
            </div>

            <form onSubmit={submitThaaraHandler}>
              <div className="modal-body">

              <div className="dropdown  mb-3 w-100">                 
              <label className="">From Nakshatra</label>                
              <select className="form-select" aria-labelledby="toNakshatra"  required onChange={onChangeFromNakshatraHandler}>
                    {nakshatraList.map((nakshatra,index)=>getThaaraList(nakshatra,index))}                    
                  </select>
              </div>


              <div className="dropdown  mb-3 w-100"> 
              <label className="">To Nakshatra</label>                
              <select className="form-select" aria-labelledby="toNakshatra" required onChange={onChangeToNakshatraHandler}>
                    {nakshatraList.map((nakshatra,index)=>getThaaraList(nakshatra,index))}                    
                  </select>
              </div>

              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100 p-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </div>
    </div>
  );
};
