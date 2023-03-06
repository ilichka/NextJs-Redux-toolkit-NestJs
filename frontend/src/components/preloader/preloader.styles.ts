import styled, { keyframes } from 'styled-components';

const rotate_360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -60px;
  width: 120px;
  height: 120px;
`;

export const LoaderLight = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  box-shadow: 0 4px 0 grey inset;
  animation: ${rotate_360} 2s linear infinite;
`;

export const LoaderTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 120px;
  box-shadow: 0 0 10px 2px red inset;
`;
