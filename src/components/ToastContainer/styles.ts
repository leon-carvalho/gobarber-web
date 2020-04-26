import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

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
    color: #fddede;
    background: #c53030;
  `,
};

export const Toast = styled.div<ToastProps>`
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
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
