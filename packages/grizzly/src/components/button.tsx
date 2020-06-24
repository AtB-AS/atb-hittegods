import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

function Button(props: Props) {
  console.log(props);
  if (props.subtitle) {
    return (
      <button>
        {props.title} - {props.subtitle}
      </button>
    );
  } else {
    return <button>{props.title}</button>;
  }
}

export default Button;
