import styled from "styled-components";

export const CardWrapper = styled.div`
    max-width: 300px;
    padding: 8px;
    
    z-index:10;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 143px 40px 95px;

    border-radius: 18px;
    background: transparent;
    box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.3);
    /* text-align: center; */
    @media screen and (min-width: 768px){
        width: 100%;
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center top;

  border-radius: 10px;
  opacity: .65;
  background: transparent;
  transition: all 0.5s ease-in-out;
  &:hover{      
      transform: scale(1.05,1.05);
      opacity:1;
      cursor: pointer;
  }
`;




