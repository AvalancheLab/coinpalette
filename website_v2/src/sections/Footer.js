import React from 'react'
import styled from 'styled-components'
import Ident from '../components/Ident'
import { colours, breakpoints } from '../data/variables'

const Container = styled.div`
    color: ${colours.light};
    margin: 0 auto;
    max-width: ${breakpoints.max}rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Background = styled.div`
    padding: 64rem;
    padding-bottom: 80rem;
    background-color: ${colours.dark};
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2327557d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`

const IdentNew = styled(Ident)`
    margin-bottom: 16rem;
    opacity: 0.8;
`


export default function Footer() {
    return (
        <Background>
            <Container>
                <IdentNew/>
                <h6>Made by <a href="#!">AvalancheLab</a></h6>
                <p>Powered by <a href="#!">Node-Vibrant</a> and <a href="#!">Coingecko's V3 API</a></p>
            </Container>
        </Background>
    )
}
