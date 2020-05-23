import React from 'react'
import styled from 'styled-components'
import Underlined from '../components/Underlined'
import BitcoinAtom from '../assets/graphic.svg'
import { colours } from '../data/variables'
import { fluid } from '../styles/Utils'

const Container = styled.div`
    margin-top: 80rem;
    display: grid;
    grid-template-areas: 
        "title    graphic"
        "subtitle graphic"
        "version  graphic";

    @media (max-width: 1350px) {
        text-align: center;
        place-items: center;
        grid-template-areas: 
            "title"
            "subtitle"
            "graphic"
            "version";
    }
   
`

const Title = styled.h1`
     @media (max-width: 1350px) {
        display: grid;
        place-items: center;
    }
    grid-area: title;
`

const SubTitle = styled.h3`
    margin-top: 16rem;
    max-width: 672rem;
    grid-area: subtitle;
`

const Version = styled.div`
    ${fluid('margin-top', '40rem', '80rem')}
    /* margin-top: 80rem; */
    grid-area: version;
`

const Graphic = styled.img`
    ${fluid('height', '260rem', '464rem')}
    margin-top: 32rem;
    grid-area: graphic;
`



export default function Splash() {
    return (
        <Container>
            <Title>
                <Underlined color={colours.dark2}>Get Crypto Logo</Underlined>
                <Underlined color={colours.dark2}>Color Palettes</Underlined>
            </Title>
            <SubTitle>An API supporting over 5000 currencies in RGB, HEX & HSL color formats.</SubTitle>
            <Version>
                <h5>Current Version &mdash; 1.0</h5>
                <p>For feature requests or issues please visit the GitHub repo.</p>
            </Version>
            <Graphic src={BitcoinAtom}></Graphic>
        </Container>
    )
}