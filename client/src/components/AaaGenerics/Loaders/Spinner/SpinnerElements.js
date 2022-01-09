import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SpinnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerDiv = styled.div`
    width: 25vw;
    height: 25vw;
    z-index: 998;
    animation: ${rotate360} 1s linear infinite;
    /* transform: translateZ(0); */
    
    border-top: 8px solid grey;
    border-right: 8px solid grey;
    border-bottom: 8px solid grey;
    border-left: 8px solid var(--first-color);
    background: transparent;
    border-radius: 50%;
`;

export const SpinnerText = styled.div`
    
    height:100%;
    margin: 0 1rem;
    display:none;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:999;    
    justify-content: center;
    align-items: center;
    
    font-size: clamp(1.44rem, 0.78rem + 3.29vw, 3.13rem);
    background: linear-gradient(
        110.78deg,
        rgb(118, 230, 80) -1.13%,
        rgb(249, 214, 73) 15.22%,
        rgb(240, 142, 53) 32.09%,
        rgb(236, 81, 87) 48.96%,
        rgb(255, 24, 189) 67.94%,
        rgb(26, 75, 255) 85.34%,
        rgb(98, 216, 249) 99.57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    @media screen and (min-width: 768px){
        display: flex;
    }
`;