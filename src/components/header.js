import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import MyLink from "./MyLink";

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <nav
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <MyLink>
        <MyLink to="/"> Yadunand Prem </MyLink>{" "}
      </MyLink>
      <div>
        <MyLink to="/posts">Posts</MyLink>
      </div>
    </nav>
  );
  // return (
  //   <Navbar className="justify-content-between" css={margin}>
  //     <Navbar.Brand>
  //       <Link to="/" css={linkStyle}>
  //         Yadunand Prem
  //       </Link>
  //       {/* Yadunand Prem */}
  //     </Navbar.Brand>
  //     <Nav className="justify-content-end">
  //       <Link to="/posts" css={linkStyle}>
  //         Posts
  //       </Link>
  //     </Nav>
  //   </Navbar>
  // );
};
