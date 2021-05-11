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
    margin: 10px 0 10px 0;
  }

  button:focus {
    outline: '2px dashed'
  }

  button:disabled {
    border-color: #848484;
    background-color: #757575;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 1.2rem;
    margin: 0;
    font-family: 'Permanent Marker', sans-serif;
  }

  h1 {
    font-family: 'Permanent Marker', sans-serif;
    font-size: 3rem;
    color: #0071eb;
    text-align: center;
    margin: 10px;
  }

  img {
    max-width: 600px;
    height: auto;
  }

  .next {
    max-width: 200px;
  }
`;
