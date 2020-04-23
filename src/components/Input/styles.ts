import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  color: #666360;
  border-radius: 10px;
  background: #232129;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    border: none;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
