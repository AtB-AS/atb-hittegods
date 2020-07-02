import React from "react";

type Props = {
  name: string;
};

function Welcome(props: Props) {
  return (
    <div className="centered">
      <div>
        <h1>Hei {props.name}</h1>
        <a href="/auth/logout">Logg ut</a>
      </div>
    </div>
  );
}

export default Welcome;
