import styled from "styled-components";
import device from "utils/devices";

export const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px dashed #3e88e469;
  border-width: 2px 0 2px 0;
  padding: 20px 0;
  position: relative;

  @media ${device.tablet} {
    height: initial;
    flex-grow: 1;
    padding: 0;
    border-width: 0;
  }
`;
export const MessageWrapper = styled.div`
  position: absolute;
  color: rebeccapurple;
  font-weight: bold;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: #00000042;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  pointer-events: none;
`;
