import { createGlobalStyle } from 'styled-components'
import { colours } from '../data/variables'
import { fluid } from './Utils'

export default createGlobalStyle` 

    :root {
        font-family : 'Roboto';
    }

    html {
        font-size: 6.25%;
    }

    h1 {
        ${fluid('font-size', '38rem', '98rem')}
        font-family : 'Domine';
        line-height: 1.1;
        letter-spacing : -0.04em;
        font-weight: 900;
    }

    h2 {
        ${fluid('font-size', '40rem', '48rem')}
        font-family : 'Domine';
        font-weight: 900;
    }

    h3 {
        ${fluid('font-size', '20rem', '32rem')}
        font-family : 'Domine';
        letter-spacing : -0.05em;
    }

    h4 {
        ${fluid('font-size', '20rem', '24rem')}
        font-weight: 600;
    }

    h5 {
        ${fluid('font-size', '16rem', '20rem')}
        font-weight: 600;
    }

    h6 {
        ${fluid('font-size', '14rem', '16rem')}
        font-weight: 500;
    }

    p {
        ${fluid('font-size', '13rem', '14rem')}
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
        white-space: pre;
    }

    strong {
        font-weight: bold;
    }

    a:active {
        color : ${colours.dark2};
    }
    a:hover{
        color: ${colours.accent};
    }

`