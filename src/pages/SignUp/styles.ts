import { shade } from 'polished';
import styled from 'styled-components';

import signUpBackgroundImage from '../../assets/sign-up-background.png';

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
  }

  > a {
    display: flex;
    align-items: center;

    color: #f4ede8;
    margin-top: -40px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImage}) no-repeat center;
  background-size: cover;
`;
