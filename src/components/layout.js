import React from "react";
import { css } from "@emotion/core";
import Header from "../components/header";
import Metadata from "./metadata";

const Layout = ({ children }) => (
  <div>
    <Metadata />
    <Header />
    <div
      css={css`
        margin: 0px auto;
        max-width: 700px;
        font-size: 18px;
        color: #333;
        padding: 0 10px;
      `}
    >
      {children}
    </div>
  </div>
);

export default Layout;
