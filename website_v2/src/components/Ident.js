import React from 'react'
import styled from 'styled-components'
import LogoFile from '../assets/palette.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    height: 32rem;
    margin-right: 9rem;
    margin-left: -3rem;
`
const Text = styled.h4`
    margin-top: 6rem;
    font-family: 'Domine';
`

export default function Ident({ className }) {
    return (
        <Container className={className}>
            <Logo src={LogoFile}/>
            <Text>CoinPalette</Text>
        </Container>
    )
}
