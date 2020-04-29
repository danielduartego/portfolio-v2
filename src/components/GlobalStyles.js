import { createGlobalStyle } from "styled-components"

import * as font from "../assets/fonts"

const GlobalStyles = createGlobalStyle`
  :root {
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;
    --light-color: hsl(0, 0%, 99%);
    --light-color-translucent: hsla(0, 0%, 99%, 0.92);
    --dark-color: hsl(0, 0%, 15%);
    --dark-color-light: hsla(0, 0%, 15%, 0.9);
    --dark-color-lighter: hsla(00, 0%, 15%, 0.7);
    --accent-color: hsl(339, 100%, 55%);
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: url('${font.IBMPlexMono400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: url('${font.IBMPlexMono700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    padding-top: 20vh;
    background-color: #000;
    font-family: 'IBMPlexMono', sans-serif;
    font-size: 19px;
    font-weight: 400;
    color: var(--light-color);

    @media (max-width: 849px) {
      font-size: 17px;
    }
  }

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ol[class],
  ul[class] {
    padding: 0;
  }

  /* Remove default margin */
  blockquote,
  body,
  dd,
  dl,
  figcaption,
  figure,
  h1,
  h2,
  h3,
  h4,
  li,
  ol[class],
  p,
  ul[class] {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`

export default GlobalStyles
