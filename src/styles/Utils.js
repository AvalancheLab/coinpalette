import { breakpoints } from '../data/variables'

function stripUnit (string) {
    const digitMatch = /\d*/;
    return parseFloat(digitMatch.exec(string).join());
}


export function fluid (variable, min, max, bkptMin, bkptMax) {

    if (!variable) {
        throw new Error('Variable undefined.')
    }

    // Function which scales linearly between 0 and 1 over user defined screen width range. 
    const valueDiff = stripUnit(max) - stripUnit(min)
    const screenDiff = stripUnit(breakpoints.max) - stripUnit(breakpoints.min)

    const breakpointMin = bkptMin ? bkptMin : breakpoints.min;
    const breakpointMax = bkptMax ? bkptMax : breakpoints.max;

    return (
    `
        ${variable} : calc(${min} + ${valueDiff} * (calc(100vw - ${breakpointMin}px) / ${screenDiff}));

        @media only screen and (min-width: ${breakpointMax}px) {
            ${variable} : ${max}; , bkptMax
        }

        @media only screen and (max-width: ${breakpointMin}px) {
            ${variable} : ${min};
        }
    `
    )
    
}
