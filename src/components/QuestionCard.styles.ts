import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type InputWrapperProps = {
  userClicked: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  transition: all 0.3s ease;
  width: 100%;
  height: 50px;
  padding: 5px 0 5px 0;
  background: ${({ userClicked }) =>
    userClicked
      ? 'linear-gradient(90deg, #FF5656, #C16868)'
      : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
  border: 3px solid #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  :hover {
    opacity: 0.8;
  }
  label {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
  }
  input {
    opacity: 0;
  }
`;
