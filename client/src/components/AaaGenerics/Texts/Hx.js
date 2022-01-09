import styled from "styled-components";

const Hx = styled.div`
    height:100%;
    margin:0;
    padding: 0;

    display: flex;
    justify-content: center; // It center all paragraph.
    align-items: center;

    background: var(--hx-background);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: center; // It center each line of text.
`;

export const H1 = styled(Hx)`
    font-size: var(--step-3);
`;

export const H2 = styled(Hx)`
    font-size: var(--step-2);
`;

export const H3 = styled(Hx)`
    font-size: var(--step-1);
`;

export const H4 = styled(Hx)`
    font-size: var(--step-0);
`;

export const H5 = styled(Hx)`
    font-size: var(--step--1);
`;

export const H6 = styled(Hx)`
    font-size: var(--step--2);
`;