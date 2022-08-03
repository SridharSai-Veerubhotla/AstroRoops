import React, { useState } from "react";
import { Header } from "./Header";
import { Input } from "./Input";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BriguSiddantam from "./BriguSiddantam";
import { HoraDetails } from "./HoraDetails";
import { DailyDetails } from "./DailyDetails";
import { ThaaraBalam } from "./ThaaraBalam";
import { Error } from "./Error";
import { HomePage } from "./HomePage";
import { BhagvadGita } from "./BhagvadGita";

export const App = () => {
  return (
    <div> 
    <BrowserRouter>       
      <Header />
      
      <div className="main-content">
        <Input />
      </div>     
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/BriguSiddantam" element={<BriguSiddantam />} />
          <Route path="/HoraDetails" element={<HoraDetails />} />
          <Route path="/Details" element={<DailyDetails />} />
          <Route path="/BhagvadGita" element={<BhagvadGita />} />
          <Route path="/ThaaraBalam" element={<ThaaraBalam />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
