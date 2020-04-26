import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  width: 100%;
  height: 56px;
  color: #312e38;
  padding: 0 16px;
  margin-top: 16px;
  font-weight: 500;
  background: #ff9000;
  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
