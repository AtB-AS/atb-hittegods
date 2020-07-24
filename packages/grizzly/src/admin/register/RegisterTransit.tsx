import React from "react";
import RegisterItem from "./RegisterItem";

function RegisterTransit() {
  return (
    <div>
      <RegisterItem status={"På vei"} pathToComp={"/admin/påVei"} />
    </div>
  );
}

export default RegisterTransit;
