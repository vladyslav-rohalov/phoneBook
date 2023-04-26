import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const DivLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 1) 20%,
    rgba(137, 0, 212, 1) 50%,
    rgba(255, 255, 255, 1) 88%
  );
`;

export const DivRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(16, 16, 16, 1) 20%,
    rgba(137, 0, 212, 1) 50%,
    rgba(255, 255, 255, 1) 88%
  );
`;
