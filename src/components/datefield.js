import React from "react";
import { css } from "@emotion/core";

export default props => {
  console.log(props);
  return (
    <p
      css={css`
        ${props.customCss};
        color: #98939f;
      `}
    >
      {props.message} <time dateTime={props.date}>{props.date}</time>
    </p>
  );
};
