import styled from 'styled-components';

export const Container = styled.main``;

export const Header = styled.header`
  padding: 32px 16px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  max-width: 1120px;

  > img {
    display: none;

    @media (min-width: 678px) {
      height: 80px;
      display: block;
    }
  }

  button {
    border: 0;
    margin-left: auto;
    background: transparent;

    svg {
      width: 20px;
      height: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media (min-width: 678px) {
    margin-left: 80px;
  }

  img {
    width: 44px;
    height: 44px;
    font-size: 10px;
    border-radius: 50%;
    background-color: #999591;

    @media (min-width: 678px) {
      width: 56px;
      height: 56px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9900;
    }
  }

  /* display: flex;
  margin-left: 80px;
  align-items: center;

  */
`;
