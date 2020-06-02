import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signInBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 700px;

  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
`;

const appearFromLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;

  animation: ${appearFromLeftAnimation} 0.6s;

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

const fadeAnimation = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;

  animation: ${fadeAnimation} 0.5s;
`;
