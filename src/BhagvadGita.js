import React, { useState } from 'react';
import Gita from './BhagvadGita.json';

export const BhagvadGita = () => {
    const[gita,setGita]=useState(Gita);


    const  getVerse=(verse)=>{
        
        return(
        <div className='card'>
            <div className="card-header"><h5 className="card-title text-primary">{verse.text}</h5></div>
            <div className="card-body"> 
                <div className="card-text">                   
                    <div className="mb-1">                      
                        <p className="card-text text-success">{verse.transliteration}</p>
                    </div>
                    <div>                      
                        <p className="card-text">{verse.word_meanings}</p>
                    </div>
                </div>
            </div>
      </div> 
        )
    };


  return (
    <div className="container-fluid mt-3">
        <div className="card">
            <div className="card-header"><h3 className="card-title">BhagvadGita</h3></div>
        <div className="card-body">
        {gita.map(verse=>getVerse(verse))}
        </div>
        </div>
    </div>
  )
}
