import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Splash from '../components/Splash'
import { colours, breakpoints } from '../data/variables'
import ArrowImage from '../assets/arrow.svg'

const Container = styled.div`
    color: ${colours.light};
    max-width: ${breakpoints.max}rem;   
    margin: 0 auto;
`

const Background = styled.div`
    padding: 80rem;
    padding-top: 124rem;
    background-color: ${colours.dark};
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2327557d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`
const Arrow = styled.img`
    height: 32rem;
    display: block;
    margin: 0 auto;
    margin-top: 40rem;
`

export default function Landing() {
    return (
        <Background>
            <Container>
                <NavBar></NavBar>
                <Splash></Splash>
                <Arrow src={ArrowImage}></Arrow>
            </Container>
        </Background>
    )
}



