import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  padding: 5vh var(--sides-padding-desktop) 3vh var(--sides-padding-desktop);
  margin-top: 20vh;
  text-align: left;
  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
    padding: 5vh var(--sides-padding-mobile) 3vh var(--sides-padding-mobile);
  }
`

const Footer = () => {
  return (
    <Container>
      <p>© {new Date().getFullYear()}</p>
    </Container>
  )
}

export default Footer
