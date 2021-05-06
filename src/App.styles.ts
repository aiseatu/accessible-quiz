import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body {
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center
  }

  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    padding: 10px 30px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    background-color: #0071eb;
    border-color: #0071eb;
    font-weight: 400;
    user-select: none;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin: 20px 0 20px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .landing {
    text-align: center;
  }

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Permanent Marker', sans-serif;
    font-size: 4rem;
    color: #0071eb;
    text-align: center;
    margin: 20px;
  }

  img {
    max-width: 600px;
    height: auto;
  }

  .start {
    max-width: 200px;
  }
`;
