import React, { useState } from 'react'
import '../styles/CardItems.css'
import Agua from '../assets/agua.jpg';


const CardItems = (props) => {


  return (
    <div className='Card-Product'>
        <div className='Card-top'>
            <img src={Agua}  className ='img-card-items'alt="" />
            <button className='Absolute-Button' >+</button>
        </div>
        <div className='Card-bottom'>
            <p className ='title-card-items'>Agua Mineral</p>
            <h3 className ='price-card-items'>$700</h3>
        </div>
    </div>
  )
}

export default CardItems