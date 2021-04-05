import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Permanent Marker', cursive;
    background-image: linear-gradient(1deg, #87f1ff, #0642ad);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 80px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    color: #fff;
    cursor: pointer;
    background: linear-gradient(180deg, #87f1ff, #0642ad);
    border: 2px solid #04245d;
    box-shadow: 0px 5px 10px rgba (0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
