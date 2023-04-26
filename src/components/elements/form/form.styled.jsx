import styled from '@emotion/styled/macro';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
`;

export const Input = styled.input`
  height: 2em;
  padding-left: 1.9em;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 0.5em;
  background-color: #ffffffcc;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;
