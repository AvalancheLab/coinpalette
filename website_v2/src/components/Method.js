import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'

export default function Method ({ type, path, description }) {


    const Container = styled.div`
        display:flex;
    `

    const Box = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 8rem 16rem;
    ` 

    const Method = styled(Box)`
        background-color: ${colours.primary};
    `

    const Path = styled(Box)`
        background-color: ${colours.secondary};
    `

    return (
        <Container>
            <Method>{ type }</Method>
            <Path>{ path }</Path>
            <p>{ description }</p>
        </Container>
    )
}
