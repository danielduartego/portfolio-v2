import React from "react"
import styled from "styled-components"
import { Image } from "@components"
// import { Nav } from '.';

const Bar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: auto;
  right: auto;
  z-index: 999;
  height: 8vh;
  width: 100%;
  padding: 0 var(--sides-padding-desktop);
  top: 0px;
  background-color: var(--light-color-translucent);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`

const Logo = styled.a`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`

const Header = () => {
  return (
    <Bar>
      <Logo to="/">DD</Logo>
      {/* <Nav /> */}
    </Bar>
  )
}

export default Header
