import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  p {
    font-size: 1rem;
  }
  fieldset {
    border: 0px;
  }
`;

type InputWrapperProps = {
  userClicked: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
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
  width: 100%;
  height: 30px;
  padding: 5px 0 5px 0;
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
