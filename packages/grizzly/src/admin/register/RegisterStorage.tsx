import React from "react";
import RegisterItem from "./RegisterItem";

type Props = {
  status: string;
  path: string;
};

function RegisterStorage() {
  return (
    <div>
      <RegisterItem status={"Funnet"} pathToComp={"/admin/lager"} />
    </div>
  );
}

export default RegisterStorage;
