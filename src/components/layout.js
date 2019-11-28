import React from "react";
import Header from "../components/header";
import Metadata from "./metadata";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import MyLink from "./MyLink";

const Layout = ({ children }) => (
  <div
    css={css`
      max-width: 1000px;
      padding: ${rhythm(1)};
      margin: ${rhythm(1)} auto;
    `}
  >
    <Header />
    <div
      css={css`
        max-width: 850px;
        margin: ${rhythm(1)} auto;
      `}
    >
      <Metadata />
      {children}
    </div>
  </div>
);

export default Layout;
