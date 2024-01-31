import React, { useState } from "react"
import "./Footer.css"

export default function Footer(){
  const[calculated, setCalculated] = useState(false)

  function toggleCalcButton(){
    setCalculated(!calculated)
  }

  return(
    <div id="footer">
      <div id="footer-box">
        <div>

        </div>
        <div id="button-box">
          <button id="green-button" onClick={toggleCalcButton}>
            {calculated? "Reset": "Calculate!"}
          </button>
        </div>
      </div>
    </div>
  )
}