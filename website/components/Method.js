import React from 'react'
import styled from 'styled-components'
import { colours, unit } from '../styles/theme'

export default function Method ({ type, path, description }) {


    const Container = styled.div`
        display:flex;
    `

    const Box = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        padding: ${unit(1)} ${unit(2)}
    ` 

    const Method = styled(Box)`
        background-color: ${colours.primary}
    `

    const Path = styled(Box)`
        background-color: ${colours.secondary}
    `

    return (
        <Container>
            <Method>{ type }</Method>
            <Path>{ path }</Path>
            <p>{ description }</p>
        </Container>
    )
}
