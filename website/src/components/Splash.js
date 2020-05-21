import React from 'react'
import styled from 'styled-components'
import Underlined from '../components/Underlined'
import BitcoinAtom from '../assets/graphic.svg'
import { colours } from '../data/variables'

const Container = styled.div`
    margin-top: 80rem;
    display: flex;
`

const Left = styled.div`
    @media (max-width: 1350px) {
        text-align: center;
    }
`

const Title = styled.h1`
     @media (max-width: 1350px) {
        display: grid;
        place-items: center;
    }

`

const SubTitle = styled.h3`
    margin-top: 32rem;
    max-width: 672rem;
`

const Version = styled.div`
    margin-top: 80rem;
`

const Graphic = styled.img`
    height : 464rem;
    margin-top: 32rem;
    @media (max-width: 1350px) {
        display: none;
    }
`



export default function Splash() {
    return (
        <Container>
            <Left>
                <Title>
                    <Underlined color={colours.dark2}>Get Crypto Logo</Underlined>
                    <Underlined color={colours.dark2}>Color Palettes</Underlined>
                </Title>
                <SubTitle>An API supporting over 7000 currencies in RGB, HEX & HSL color formats.</SubTitle>
                <Version>
                    <h5>Current Version &mdash; 1.0</h5>
                    <p>For feature requests or issues please visit the GitHub repo.</p>
                </Version>
            </Left>
            <Graphic src={BitcoinAtom}></Graphic>
        </Container>
    )
}