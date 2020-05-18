const flex = {
    "centered" : `
        display: flex;
        justify-items: center;
        align-items: center;
    `
}

const responsive = () => {

}

const fluid = (param, min, max, bkmin, bkmax) => {
    return `
        ${param} : 
    
    `
}

export { flex, fluid };