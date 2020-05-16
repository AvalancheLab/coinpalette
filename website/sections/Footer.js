import styled from 'styled-components';
import { colours } from '../styles/theme';

export default Footer = () => {

    const Footer = styled.footer`
        background-color: ${colours.dark};
    
        display: flex;
        align-items: center;
        justify-content: space-between;    
    `

    const Left = styled.p`

    `

    const Center = styled.p`
        font-weight: bold;
    `

    const Right = styled.p`

    `

    return (
        <Footer>
            <Left>Made by AvalancheLab</Left>
            <Center>CoinPalette</Center>
            <Right>Built with Node-Vibrant and Coingecko's V3 API</Right>
        </Footer>
    )
}