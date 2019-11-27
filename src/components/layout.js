import React, { Fragment } from "react";
import Header from "../components/header";
import Metadata from "./metadata";
import { css } from "@emotion/core";

const Layout = ({ children }) => (
  <div css={css``}>
    <Metadata />
    <Header />
    {children}
  </div>
);

export default Layout;
