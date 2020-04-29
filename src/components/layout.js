import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Footer, GlobalStyles, Header } from "@components"

const StyledContent = styled.main`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;
  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <StyledContent>{children}</StyledContent>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
