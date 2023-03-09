import React, { useContext } from 'react'
import { Globaldata } from '../App'
import './Cards.css'


export const Cards = () => {
    const apidata = useContext(Globaldata) 
    console.log(apidata)
    if (!apidata) {
      return <div className='cardscontainer'> <h2>Please Enter Valid Movie Name</h2></div>
  }
  return (
    <div className='cardscontainer'>
    
        {apidata.map((ele)=>{
            console.log(ele)
            return <div className="cards">
            <h3>{ele.Title}</h3>
            <img src={ele.Poster} alt="" />
            <p>{ele.Year}</p>

        </div>

        })}
       
        
    </div>
  )
    }