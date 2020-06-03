import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      margin: 0 auto;
      max-width: 1120px;

      svg {
        width: 24px;
        height: 24px;
        color: #999591;
      }
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 700px;
  margin: -176px auto 0;

  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;

    display: flex;
    flex-direction: column;

    @media (max-width: 350px) {
      width: 100%;
      padding: 0px 20px;
    }

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;
  margin-bottom: 32px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 0;
    bottom: 0;

    border: 0;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #ff9900;
    transition: background 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9900')};
    }
  }
`;
