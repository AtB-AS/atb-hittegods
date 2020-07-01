import React, { useState } from "react";

type Props = {
  name: string;
  email: string;
};

function Confirmation(props: Props) {
  return (
    <div>
      <h1>Din henvendelse er registrert!</h1>
      <p>Takk for din henvendelse, {props.name}.</p>
      <p>
        Du vil få en mail din epost: {props.email} med en link til status på din
        henvendelse.
      </p>
      <p>Frykt ikke, AtBjørnar er på saken! :)</p>
    </div>
  );
}

export default Confirmation;
