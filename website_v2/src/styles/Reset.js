import { createGlobalStyle } from 'styled-components'

/** Reset values to chosen defaults. **/
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color: inherit;
        font-weight: inherit;
        font-family: inherit;
        font-variant-numeric: normal;
    }

    body {
        overflow-x: hidden;
    }

    a { 
        font-size: inherit;
    }

    a:hover{
        cursor:pointer;
    }

    code {
        white-space: pre-wrap;
    }

    table {
        border-spacing: 0;
    }
`





