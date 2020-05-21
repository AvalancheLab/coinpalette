import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from '../data/variables'

const Container = styled.div`
    max-width: ${breakpoints.max}rem;   
    margin: 0 auto;
`

const Background = styled.div`
    ${({ color, image } = {}) => css`
        background-color: ${color};
        background-image: url(${image});
    `       
    }
`

export default function Section({ background, children }) {
    return (
        <Background background={background}>
            <Container>
                {children}
            </Container>
        </Background>
    )
}
