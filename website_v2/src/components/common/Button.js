import React from 'react'
import styled from 'styled-components'
import { colours } from '../../data/variables'

const ButtonElement = styled.button`
    padding: 0 24rem;
    color: ${colours.dark};
    font-weight: 600;
    border-radius: 2rem;
    height: 40rem;
`

export default function Button ({ children }) {
    return <ButtonElement>{children}</ButtonElement>
}