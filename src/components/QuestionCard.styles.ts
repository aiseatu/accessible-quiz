import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  p {
    font-size: 1rem;
  }
  fieldset {
    border: 0px;
  }
  legend {
    max-width: 600px;
    width: 100%;
  }
`;

type InputWrapperProps = {
  userClicked: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  label {
    text-align: center;
    white-space: nowrap;
    display: inline-block;
    color: #0071eb;
    cursor: pointer;
    background-color: #fff;
    border-color: #0071eb;
    font-weight: 400;
    user-select: none;
    vertical-align: middle;
    border: ${({ userClicked }) => (userClicked ? '2px dotted' : '1px solid')};
    font-size: 1rem;
    border-radius: 0.25rem;
    max-width: 600px;
    width: 100%;
    height: 40px;
    padding: 5px 0 5px 0;
    :hover {
      opacity: 0.8;
    }
  }
  input {
    opacity: 0;
  }
`;
