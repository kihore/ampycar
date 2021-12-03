import Dropdown from '../../../components/ui/dropdown/Dropdown'
import React from 'react'
import InputField from '../../../components/ui/input/Input'
import "./landingpage.css"


export default function LandingPage() {

    const ddselect = ()=>{
      console.log("hello there")
    }

    return (
        <div className="container-md">
        Select Car locations    
        <div className='container-input-placeholder'> 
        <input type="number" 
        className="input-rate" />
        <select 
        className='dropdown-list'>
        </select>
      
        </div>
        <div className='container-input-placeholder'> 
        <input type="number" 
        className="input-rate" />
        <select 
        className='dropdown-list'>
        </select>
      
        </div>
        </div>
    )
}
