import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    opacity: 0;
    padding: 8px;
    width: 160px;
    color: #312e38;
    font-size: 14px;
    font-weight: 500;
    visibility: hidden;
    border-radius: 4px;
    background: #ff9000;
    transition: opacity visibility 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      top: 100%;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #ff9000 transparent;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
