import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'

export default function Method ({ type, path, description }) {


    const Container = styled.div`
        display:flex;
        align-items: center;
        color: ${colours.dark};
        margin-top: 24rem;
    `

    const Box = styled.p`
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 8rem 16rem;
        color: ${colours.light};
    ` 

    const Method = styled(Box)`
        border-radius: 4rem 0 0 4rem;
        background: ${colours.dark2};
    `

    const Path = styled(Box)`
        border-radius: 0 4rem 4rem 0;
        background-color: ${colours.dark};
        margin-right: 16rem;
    `

    return (
        <Container>
            <Method>{ type }</Method>
            <Path>{ path }</Path>
            <p>{ description }</p>
        </Container>
    )
}
