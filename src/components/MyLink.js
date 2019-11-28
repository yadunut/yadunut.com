import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

export default props => {
  console.log(props);
  return (
    <Link
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
