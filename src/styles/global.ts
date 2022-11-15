import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;

    }
    body {
        font-family: 'Nunito', sans-serif;
        background-color: ${({theme}) => theme["base-background"]};
        margin-bottom: 10rem;
    }
    ::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${({theme}) => theme["blue"]};
    }

`;
