import React from "react";
import { SvgIcon } from "@material-ui/core";

// @ts-ignore
function QuestionMark(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M 10 20.5 H 13 V 17.5 H 10 V 20.5 M 11.5 -3.5 M 11.5 23.5 M 11.5 2.5 C 8.185 2.5 5.5 5.185 5.5 8.5 H 8.5 C 8.5 6.85 9.85 5.5 11.5 5.5 S 14.5 6.85 14.5 8.5 C 14.5 11.5 10 11.125 10 16 H 13 C 13 12.625 17.5 12.25 17.5 8.5 C 17.5 5.185 14.815 2.5 11.5 2.5 Z"
        fill="currentcolor"
      />
    </SvgIcon>
  );
}

export default QuestionMark;
