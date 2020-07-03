import React from "react";

type Props = {
  name: string;
};

function Welcome(props: Props) {
  return (
    <div className="centered">
      <div>
        <h1>Hei {props.name}</h1>
        <a
          href={
            process.env.NODE_ENV === "production"
              ? "/auth/logout"
              : "http://localhost:5000/auth/logout"
          }
        >
          Logg ut
        </a>
      </div>
    </div>
  );
}

export default Welcome;
