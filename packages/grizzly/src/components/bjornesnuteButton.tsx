import React from "react";

type Props = {
  title: string;
};

function BjornesnuteButton(props: Props) {
  function handleClick(){
    fetch('http://localhost:5000')
        .then(response => response.json())
        .then(data => console.log(data));
    console.log("knapp er klikket og grizzly hilser til backend:):):)")
  }

  console.log(props);
    return (
      <button onClick={handleClick}>
        {props.title}
      </button>
    );
  }

export default BjornesnuteButton;
