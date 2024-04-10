import React from 'react'
import Style from '../CSS/Home.module.css'
export default function TextInput(Label, placeholder) {
  return (
    <>
    <div className={`${Style.textinputdiv}`}> 
    <div>
    <label for={Label} class="form-label">{Label}</label>
     </div>
    <div className={`${Style.inputcontainer}`}>
     <input type='text' placeholder={placeholder} className={`form-label `}  id={Label} required /></div>
  
     {/* bordr-gray-value for the colour */}
     </div>
     </>
  )
}
