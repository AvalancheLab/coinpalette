import React from 'react'
import styled from 'styled-components'
import Underlined from '../components/Underlined'
import { colours } from '../data/variables'
import Box from '../components/Box'
import APILogo from '../assets/books.svg'
import Article from '../components/common/Article'
import Method from '../components/Method'
import { fluid } from '../styles/Utils'


const Container = styled.div`
    color: ${colours.dark};
    max-width: 568rem;   
    margin: 0 auto;
    padding: 0 16rem;
    ${fluid('padding-top', '72rem', '120rem')};
    ${fluid('padding-bottom', '72rem', '120rem')};
`

const Title = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 8rem;
    margin-bottom: 16rem;
`

const TitleText = styled.h2`
`
const TitleLogo = styled.img`
    height: 48rem;
    margin-right: 8rem;
`

const response = 
`"bitcoin" : {
    "vibrant" : [122, 221, 174],		
    "muted" : [122, 221, 174],		
    "muted-dark" : [122, 221, 174],
    "vibrant" : [122, 221, 174],
    "muted" : [122, 221, 174]
}`;

export default function Docs() {
    return (
        <Container>
            <Title>
                <TitleLogo src={APILogo}></TitleLogo>
                <Underlined color={colours.light2}>
                    <TitleText>Usage</TitleText>
                </Underlined>
            </Title>
            <Article>
                <p>CoinPalette is a simple REST API offering color palettes for cryptocurrency logos. Use cases include: graphs, charts and static sites.</p>
                <h4>Example</h4>
                <p>An example API request specifying coins and color format:</p>
                <Box title="Request">
                    <code>https://www.coinpalette.com/colors?coins=bitcoin,format=rgb</code>
                </Box>
                <p>Corresponding JSON response with fields for each color variant:</p>
                <Box title="Response">
                    <code>{response}</code>
                </Box>
                <h4>Endpoints</h4>
                <p>List of API endpoints and respective parameters. * = Required Parameter.</p>
                <Method type="GET" path="/coins" summary="Fetch a list of coins."/>
                <Method type="GET" path="/colors" summary="Fetch color palettes."/>
                <p><strong>coins*</strong> &mdash; List of cryptocurrencies.</p>
                <p><strong>format*</strong> &mdash; Specified color format.</p>
            </Article>
        </Container>
    )
}
