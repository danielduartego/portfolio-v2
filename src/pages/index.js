import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"

const Sub = styled.p`
  max-width: 28em;
  font-size: 22px;
  line-height: 1.6;
  color: #fc0;
  margin-left: 5px;
  @media (max-width: 849px) {
    font-size: 19px;
  }
`

const Heading = styled.h1`
  display: block;
  font-size: 80px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -4px;
  @media (max-width: 849px) {
    font-size: 45px;
  }
`

const Title = styled.h2`
  font-size: 30px;
  font-weight: 100;
  line-height: 1.6;
  color: #fc0;
  margin-left: 5px;
  @media (max-width: 849px) {
    font-size: 19px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Sub>Hello, I'm</Sub>
    <Heading>Daniel Duarte</Heading>
    <Title>Creative Web Developer</Title>
  </Layout>
)

export default IndexPage
