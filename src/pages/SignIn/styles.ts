import { shade } from 'polished';
import styled from 'styled-components';

import signInBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;

    @media (max-width: 350px) {
      width: 100%;
      padding: 0px 20px;
    }

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      color: #f4ede8;
      border-radius: 10px;
      background: #232129;
      border: 2px solid #232129;

      & + input {
        margin-top: 16px;
      }
    }

    button {
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
    }

    a {
      display: block;
      color: #f4ede8;
      margin-top: 14px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    margin-top: -40px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
