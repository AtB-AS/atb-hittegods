import React from "react";
import RegisterItem from "./RegisterItem";

type Props = {
  status: string;
  path: string;
};

function RegisterTransit(props: Props) {
  return (
    <div>
      <RegisterItem status={"På vei"} pathToComp={"/admin/påVei"} />
    </div>
  );
}

export default RegisterTransit;
