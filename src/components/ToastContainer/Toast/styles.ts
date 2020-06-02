import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background-color: #ebf8ff;
  `,

  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,

  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 100%;
  max-width: 360px;
  display: flex;
  position: relative;
  border-radius: 10px;
  padding: 16px 30px 16px 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      opacity: 0.8;
      font-size: 14px;
      margin-top: 4px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;

    border: 0;
    opacity: 0.6;
    color: inherit;
    background: transparent;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
