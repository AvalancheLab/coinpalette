import { css } from 'styled-components'
import { breakpoints } from '../data/variables'

function stripUnit (string) {
    const digitMatch = /\d*/;
    return parseFloat(digitMatch.exec(string).join());
}

function flexCenter () {
    return `
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

function fluid (variable, min=null, max=null) {

    if (!variable) {
        throw new Error('Variable undefined.')
    }

    // Function which scales linearly between 0 and 1 over user defined screen width range. 
    const valueDiff = stripUnit(max) - stripUnit(min)
    const screenDiff = stripUnit(breakpoints.max) - stripUnit(breakpoints.min)

    return (
    `
        ${variable} : calc(${min} + ${valueDiff} * (calc(100vw - ${breakpoints.min}) / ${screenDiff}));

        @media only screen and (min-width: ${breakpoints.max}) {
            ${variable} : ${max}; 
        }

        @media only screen and (max-width: ${breakpoints.min}) {
            ${variable} : ${min};
        }
    `
    )
    
}


module.exports = {fluid, flexCenter} 