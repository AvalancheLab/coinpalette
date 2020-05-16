import styled from 'styled-components';
import { colours } from './theme';

export default Footer = () => {

    const Footer = styled.footer`
        background-color: ${colours.dark};
    
        display: flex;
        align-items: center;
        justify-content: space-between;    
    `

    const Author = styled.p`

    `

    const Copyright = styled.p`
        font-weight: bold;
    `

    const Tools = styled.p`

    `

    return (
        <Footer>
            <Author>Made by AvalancheLab</Author>
            <Copyright>CoinPalette</Copyright>
            <Tools>Built with Node-Vibrant and Coingecko's V3 API</Tools>
        </Footer>
    )
}