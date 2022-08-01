import { css } from 'styled-components';

export const SmoothAnimation = css`
  animation-name: smooth;
  animation-duration: 0.2s;
  animation-iteration-count: 1;

  @keyframes smooth {
    0% {
      opacity: 0;
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
