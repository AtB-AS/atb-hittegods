import React from "react";
import RegisterItem from "./RegisterItem";

type Props = {
  status: string;
  path: string;
};

function RegisterStorage(props: Props) {
  return (
    <div>
      <RegisterItem status={"Funnet"} pathToComp={"/admin/lager"} />
    </div>
  );
}

export default RegisterStorage;
