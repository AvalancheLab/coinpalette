import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.span`
    width: max-content;
    display: block;
    ${({ color }) => css`
        background: linear-gradient(transparent 0%, transparent 65%, ${ color } 65%, ${ color }  90%, transparent 90%, transparent 100%);
    `}
`

export default function Underlined({ color, children }) {
    return <Container color={color}>{ children }</Container>
}
