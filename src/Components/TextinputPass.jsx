import React from 'react'
import  Style from'../CSS/Home.module.css'

import Form from'react-bootstrap/Form';
import  InputGroup  from 'react-bootstrap/InputGroup'

export default function TextinputPass(label,placeholder) {
    
        const [showPassword, setShowPassword] = useState(false);
      
        const togglePasswordVisibility = () => {
          setShowPassword((prevShowPassword) => !prevShowPassword);
        };
  return (
    <div className={`${Style.textinputdiv}`}>
      <div>
        <label htmlFor={label} className="form-label">{label}</label>
      </div>
      <div className={Style.inputcontainer}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={`form-label`}
          id={label}
          required  />
        <button
          type="button" 
          className={`btn  ${Style.inputiconbutton}`}
          onClick={togglePasswordVisibility} 
        ><FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </button>
      </div>
    </div>
  )

}
