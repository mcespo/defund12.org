﻿import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { HeaderProps } from "../../types/PropTypes";
import styled from "@emotion/styled";

/**
 * The site header, containing the banner and introduction.
 *
 * _This is meant to be internal to this file and should
 * probably not be exported._
 */
class _Header extends React.Component<HeaderProps> {
  /**
   * React render method.
   * @return {React.ReactNode} the rendered component
   */
  render() {
    return (
      <StyledHeader>
        <Link to="/">
          <h1 aria-label="Defund Twelve .org">{this.props.siteTitle}</h1>
        </Link>
        <p className="divider">{this.props.subtitle}</p>
        <p aria-label="12 = Police">"12" = 🚓</p>
      </StyledHeader>
    );
  }
}

/**
 * The site header, containing the banner and introduction.
 * @return {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          siteConfig {
            siteTitle
            subtitle
          }
        }
      `}
      render={(data: { siteConfig: HeaderProps }) => (
        <_Header
          siteTitle={data.siteConfig.siteTitle}
          subtitle={data.siteConfig.subtitle}
        />
      )}
    />
  );
}

const StyledHeader = styled.header`
  margin-top: var(--x4);
`;
