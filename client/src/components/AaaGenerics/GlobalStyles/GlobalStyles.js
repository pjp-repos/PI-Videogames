import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* ==================== RESETS ==================== */
    html {
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        font-size: 16px;
        scroll-behavior: smooth;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        overflow-x: hidden;
    }
    :root{
        /* ==================== Custom Props ==================== */
        --first-color: #01bf71;
        --white-color: #ffffff;

        /* ==================== Fluid font-size ==================== */
        
        /* https://utopia.fyi/type/calculator?c=320,18,1.2,1600,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l*/        
        --step--2: clamp(0.78rem, 0.74rem + 0.22vw, 0.96rem);
        --step--1: clamp(0.94rem, 0.87rem + 0.33vw, 1.20rem);
        --step-0: clamp(1.13rem, 1.03rem + 0.47vw, 1.50rem);
        --step-1: clamp(1.35rem, 1.22rem + 0.66vw, 1.88rem);
        --step-2: clamp(1.62rem, 1.44rem + 0.90vw, 2.34rem);
        --step-3: clamp(1.94rem, 1.70rem + 1.23vw, 2.93rem);
        --step-4: clamp(2.33rem, 2.00rem + 1.66vw, 3.66rem);
        --step-5: clamp(2.80rem, 2.35rem + 2.22vw, 4.58rem);        

        /* ==================== Modal windows ==================== */
        --modal-border: 10px double var(--first-color);
        --modal-border-radius: 20px;

        /* =================== Hx tags =============================*/
        --hx-background:linear-gradient(
            110.78deg,
            rgb(118, 230, 80) -1.13%,
            rgb(249, 214, 73) 15.22%,
            rgb(240, 142, 53) 32.09%,
            rgb(236, 81, 87) 48.96%,
            rgb(255, 24, 189) 67.94%,
            rgb(26, 75, 255) 85.34%,
            rgb(98, 216, 249) 99.57%
        );
        --hx-backgroundx:linear-gradient(
            110.78deg,
            #01bf71 0%,
            #01bf71 100%
        );

        /* =================== P tags =============================*/
        --p-color: rgb(255, 7, 110);
        --p-font-size: var(--step--2);
    }
`;