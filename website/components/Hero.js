import styled from 'styled-components'
import { colours, unit, breakpoints } from '../data/variables'
import { flexCenter } from '../styles/Utils';


const Container = styled.div`
    margin-top: ${unit(10)};
    display: flex;
    justify-content: space-between;
`

const Text = styled.div`  `

const Title = styled.h1`

    display: flex;
    flex-direction: column;
    width: max-content;
    > * {
        width: max-content;
        background: linear-gradient(transparent 0%, transparent 65%, ${colours.dark2} 65%, ${colours.dark2} 90%, transparent 90%, transparent 100%);
    }
    @media (max-width: ${breakpoints.max}) {
        ${flexCenter()}
        flex-direction: column;
    }
`

const Subtitle = styled.h3`
    margin-top: ${unit(4)};
    max-width: ${unit(84)};
    color: ${colours.light};
`

const Version = styled.div`
    margin-top: ${unit(10)};
`

const Graphic = styled.img`
    width: ${unit(58)};
    margin-top: ${unit(4)};
    @media (max-width: ${breakpoints.max}) {
        display: none;
    }
`

export default function Hero () {
    return (
        <Container>
            <Text>
                <Title>
                    <span>Get Crypto Logo</span>
                    <span>Color Palettes</span>
                </Title>
                <Subtitle>An API supporting over 7000 currencies in RGB, HEX & HSL color formats.</Subtitle>
                <Version>
                    <h4>Current Version &mdash; 1.0</h4>
                    <p>For feature requests or issues please visit the <a href="#!"> GitHub repo</a>.</p>
                </Version>
            </Text>
            <Graphic src={require("../assets/graphic.svg")}/>
        </Container>
    )
}
