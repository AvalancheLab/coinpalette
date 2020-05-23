import React from 'react'
import styled from 'styled-components'
import Ident from '../components/Ident'
import { colours, breakpoints } from '../data/variables'
import { fluid } from '../styles/Utils'
import Link from '../components/common/Link'


const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colours.dark};
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2327557d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`


const Container = styled.div`
    color: ${colours.light};
    margin: 0 auto;
    max-width: ${breakpoints.max}rem;
    display: grid;
    place-items: center;
    @media only screen and (max-width: 800px) {
        justify-content: start;
    }
    grid-gap: 8rem;
    align-items: center;
    margin: 48rem 16rem;
    text-align: center;
    padding:  0 16rem;
    opacity: 0.8;
`


const IdentNew = styled(Ident)`
    ${fluid('margin-bottom', '0rem', '8rem')}
    opacity: 0.8;
`


export default function Footer() {
    return (
        <Background>
            <Container>
                <IdentNew/>
                <h6>Made by <Link to="https://github.com/AvalancheLab">AvalancheLab</Link></h6>
                <p>Powered by <Link to="https://www.npmjs.com/package/node-vibrant">Node-Vibrant</Link> and <Link href="https://www.coingecko.com/en/api">Coingecko's V3 API</Link></p>
            </Container>
        </Background>
    )
}
