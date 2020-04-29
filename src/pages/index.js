import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"

const Description = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  line-height: 1.6;
  color: #fc0;
  @media (max-width: 849px) {
    font-size: 19px;
  }
`

const Heading = styled.h1`
  display: block;
  margin: 0 auto 1vh auto;
  font-size: 80px;
  line-height: 1.2;
  text-align: center;
  font-weight: 700;
  letter-spacing: -4px;
  @media (max-width: 849px) {
    font-size: 45px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Description>Hello, I'm</Description>
    <Heading>Daniel Duarte</Heading>
    <Description>Web Developer</Description>
  </Layout>
)

export default IndexPage
