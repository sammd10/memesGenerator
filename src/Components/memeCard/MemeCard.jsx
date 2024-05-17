import React, { useState } from 'react'
import { memeContext ,goBackContext } from '../useContext/UseContext'
import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './memCard.css'

export default function MemeCard() {
  const value = useContext(memeContext) 
  const btn = useContext(goBackContext) 
  const navigate = useNavigate()
  
  const handle = () =>{
     btn.setShow(true)
  }

  return (
    <div className='d-flex container flex-wrap gap-4 mt-4'>
      {
        value.map((meme) =>(
            <div key={meme.id} id='card' className="card" style={{width:"18rem"}}>
              <img src={meme.url}  className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{meme.name}</h5>
                 <button onClick={e => handle(navigate(`/edit/?url=${meme.url}`))} className="btn btn-primary">Creat Meme</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
