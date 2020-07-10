import React, { useState } from "react";
import { TextField } from "@material-ui/core";

type newInquery = {
  name: string;
  phoneNumber: string;
  email: string;
  subcategory: string;
  brand: string;
  line: string;
  date: string;
  description: string;
  color: string;
};

function RegisterInquery() {
  const [inquery, setInquery] = useState<newInquery>();

  function postForm() {}

  return (
    <div>
      <form onSubmit={postForm}>
        <TextField name="name" type="text" label="Navn" variant="outlined" />
        <TextField name="phoneNumber" type="text" label="Telefon" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default RegisterInquery;
