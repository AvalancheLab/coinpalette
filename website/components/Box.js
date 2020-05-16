import React from 'react'
import styled from 'styled-components'
import { colours, unit } from '../styles/theme'

export default function Box({ title, children }) {

    const Header = styled.div`
        background: linear-gradient(toright, ${colours.primary}, ${colours.secondary});
        padding: ${unit(1)};
    `

    const Content = styled.div`
        background: ${colours.dark};
        padding: ${unit(2)};
    `

    return (
        <>
            <Header>{ title }</Header>
            <Content>{ children }</Content>
        </>
    )
}
