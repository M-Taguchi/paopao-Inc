import { keyframes } from "hono/css";

export const fadeInOutAnimation = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

export const slideBottomFadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const fadeInAnmation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
