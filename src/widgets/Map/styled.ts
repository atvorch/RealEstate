import styled from "styled-components";
import device from "utils/devices";

export const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px dashed #3e88e469;
  border-width: 2px 0 2px 0;
  padding: 20px 0;
  position: relative;
  flex-shrink: 0;

  @media ${device.tablet} {
    height: initial;
    flex-grow: 1;
    padding: 0;
    border-width: 0;
  }
`;
export const MessageWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  color: rebeccapurple;
  font-weight: bold;
  width: 100%;
  z-index: 1;
  background: #00000042;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  pointer-events: none;
  transition: 0.9s;
  text-shadow: 0 0 5px #000000b0;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  top: 20px;
  height: calc(100% - 40px);
  text-align: center;
  @media ${device.tablet} {
    top: 0;
    height: 100%;
  }
`;
