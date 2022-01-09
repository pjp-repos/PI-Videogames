import styled, { keyframes } from "styled-components";


const top = keyframes`
	0%{
		top: -10px;
	}
	20%{
		top: 100%;
		left: -10px;
	}
	40%{
		left: 100%;
		top: 100%;
		transform: rotate(180deg);
	}
	60%{
		top: -10px;
		left: 100%;
	}
	80%{
		top: -10px;
		transform: rotate(360deg);
	}
	100%{
		left: -10px;
	}
`;


const bottom = keyframes`
    0%{
        bottom: -10px;
    }
    20%{
        bottom: 100%;
        right: -10px;
    }
    40%{
        right: 100%;
        bottom: 100%;
        transform: rotate(180deg);
    }
    60%{
        bottom: -10px;
        right: 100%;
    }
    80%{
        bottom: -10px;
        transform: rotate(360deg);
    }
    100%{
        right: -10px;
    }
`;



const scale = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(0.7);
    }
    100%{
        transform: scale(1);
    }
`;


export const SquaresWrapper = styled.div`
    width: 25vw;
    height: 100vh;
    display: flex;
    position:relative;
    justify-content: center;
    align-items: center;
`;

export const SquaresDiv = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 50px;;
	height: 50px;;
	animation: ${scale} ease 1.4s infinite;

    &::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: white;
        top: -10px;
        left: -10px;
        animation: ${top} ease 3s infinite;
    }

    &::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: white;
        bottom: -10px;
        right: -10px;
        animation: ${bottom} ease 3s infinite;
    }

`;
