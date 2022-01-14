import styled from "styled-components";


export const LandingWrapper = styled.div`
    width: 100vw;
    height: 99.2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const LandingImage = styled.img`
  width: 50%;
  height: auto;

  object-fit: cover;
  object-position: center top;

  border-radius: 10px;
  opacity: .65;
  background: transparent;
`;