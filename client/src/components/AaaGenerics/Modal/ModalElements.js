import styled from "styled-components";
import {MdClose} from "react-icons/md";

export const ModalBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 997;
    transition: 0.3s ease-in-out;   
    opacity: ${
        ({show})=>(show ? '1' : '0' )
    };
    top: ${
        ({show})=>(show ? '0' : '-100%' )
    };
`;
    
export const ModalWrapper = styled.div`
    width: 100%;
    height: 80vh;
    border: var(--modal-border);
    border-radius: var(--modal-border-radius);
    background-color: #000;
    color:#000;
    position:relative;
    z-index:998;
  

    @media screen and (min-width: 768px){
        max-width: 80vw;
    }
    
    @media screen and (min-width: 1024px){
        max-width: 60vw;
    }
`;

// export const ModalImg = styled.img`
//     width: 100%;
//     max-width: 50vh;
//     padding: 1rem;
//     height: auto;
//     object-fit: cover;
//     justify-self: center;
//     align-self:center;
// `;

export const ModalcloseBtn = styled(MdClose)`
    width: 32px;
    height: 32px;
    padding:0;

    position: absolute;
    top: 20px;
    right: 20px;
    z-index:999;

    display: ${
        ({closeBtn})=>(closeBtn ? 'block' : 'none' )
    };
    
    fill: var(--first-color);
    cursor: pointer;

`;
    