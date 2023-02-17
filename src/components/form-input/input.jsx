import React from "react";

import "./styles.css";


export default function Input ({type, text, name, placeholder, handleOnChange, value}) {
return(
<div className="form-control">
    <label htmlFor={name}>{text}:</label>
    <input
     type={type}
     name={name}
     id={name}
     placeholder={placeholder}
     onChange={handleOnChange}
     value={value}
    />
</div>

)

}
