import styled from 'styled-components'
import { colours, unit } from '../styles/theme'
import arrowIcon from '../assets/arrow'

export default function Demo() {

    const Container = styled.div`
        width: ${unit(75)};
        height: ${unit(25)};
        background-color: ${colours.light};
        padding: ${unit(5)};
        color: ${colours.primary};
    `

    const Request = styled.h4``

    const Arrow = styled.img``

    const Response = styled.code``

    return (
        <Container>
            <Request>Bitcoin / RGB</Request>
            <Arrow src={arrowIcon}></Arrow>
            <Response></Response>
        </Container>
    )
}
