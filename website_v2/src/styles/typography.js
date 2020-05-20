import { createGlobalStyle } from 'styled-components'
import { colours } from '../data/variables'
export default createGlobalStyle` 

    :root {
        font-size: 6.25%;
        font-family : 'Roboto';
    }

    h1 {
        font-size : 98rem;
        font-family : 'Domine';
        line-height: 1.1;
        letter-spacing : -0.04em;
        font-weight: 900;
    }

    h2 {
        font-size : 48rem;
        font-family : 'Domine';
        font-weight: 900;
    }

    h3 {
        font-size : 32rem;
        font-family : 'Domine';
        letter-spacing : -0.05em;
    }

    h4 {
        font-size : 24rem;
        font-weight: 600;
    }

    h5 {
        font-size : 20rem;
        font-weight: 600;
    }

    h6 {
        font-size : 16rem;
        font-weight: 500;
    }

    p {
        font-size : 14rem;
        line-height: 1.6;
        
    }

    button {
        font-size : 14rem;
        font-family: 'Roboto';
        text-transform: uppercase;
        letter-spacing : 1.15;
        line-height : 1.6;
    }

    code {
        font-size: 14rem;
        font-family: 'Roboto Mono';
        line-height : 1.6;
    }

    a:active {
        color : ${colours.dark2};
    }
    a:hover{
        color: ${colours.accent};
    }

`