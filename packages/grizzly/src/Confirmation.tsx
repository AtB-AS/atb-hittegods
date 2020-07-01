import React, { useState } from "react";

type Props = {
  name: string;
  email: string;
};

function Confirmation(props: Props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Confirmation;
