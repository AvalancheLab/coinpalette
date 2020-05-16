import styled from 'styled-components'
import Demo from '../components/Demo'
import Header from '../components/Header';
import BitcoinAtom from '../components/BitcoinAtom'
import { colours } from '../styles/theme'


export default Landing = () => {

    const Container = styled.div`
        max-width: 1800px;
        background: linear-gradient(toright, ${colours.primary}, ${colours.secondary});

    `

    const Title = styled.h1`
    // https://hackernoon.com/bip-148-uasf-first-year-anniversary-a-new-system-of-governance-223907ec298b
        background: linear-gradient(transparent 0%, transparent calc(50% - 0.1em), ${colours.primary} 100%, ${colours.primary} 100%)
    `

    const Subtitle = styled.h1`
    
    `

    const Version = styled.div`
        margin-top: auto;
    `

    return (
        <Container>
            <Header/>
            <Title>Get Cryptocurrency Logo Colors</Title>
            <Subtitle>
                A simple rest API for fetching cryptocurreny logo colours in 
                <bold>RGB</bold>,
                <bold>HEX</bold> &
                <bold>HSL</bold>
            </Subtitle>
            <BitcoinAtom/>
            <Demo/>
            <Version>
                <h3>Current Version &emdash 1.0</h3>
                <p>To request new features make a pull request 
                    <a href="#!">here</a>.
                </p>
            </Version>
        </Container>
    )
}