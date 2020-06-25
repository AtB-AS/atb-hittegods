import React, { useState } from "react";


function BjornesnuteButton() {
  const [buttonTitle, setButtonTitle] = useState("Grizzly hilser til backend");
  function handleClick(){
    fetch('http://localhost:5000')
        .then(response => response.json())
        .then(data => {
            setButtonTitle(data)
            console.log(data);
        })
        .catch(error =>{
          console.log("Noe gikk galt", error)

    })

    console.log("knapp er klikket og grizzly hilser til backend:):):)")
  }
    return (
          <button onClick={handleClick} >
              {buttonTitle}
          </button>
    );
  }

export default BjornesnuteButton;
