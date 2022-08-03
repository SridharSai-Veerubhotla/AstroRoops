import React, { useState } from 'react';
import BhagvadGita from './BhagvadGita.json';
import moment from 'moment';

export const HomePage = () => {

  const [gita,setGita]=useState(BhagvadGita);
  const startDate=('2022,08,01');
  const startDateMoment=moment(startDate);
  const currentDate=new Date();
  const difference=moment(currentDate).diff(startDateMoment,'days');
  let verse=gita.at(difference);


  return (
    <div className='container-fluid mt-3'>
      <div className='card'>
        <div className="card-header"><h5 className="card-title">Learn BhagvadGita</h5></div>
        <div className="card-body"> 
          <div className="card-text">
            <div>                      
             <p className="card-text text-primary">{verse.text}</p>
           </div>
           <div>                      
             <p className="card-text text-success">{verse.transliteration}</p>
           </div>
           <div>                      
           <p className="card-text">{verse.word_meanings}</p>
        </div>
        </div>
        </div>
      </div>     
    </div>
  )
}
