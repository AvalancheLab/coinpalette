import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'


const Header = styled.div`
    display:flex;
    align-items: center;
    color: ${colours.dark};
    margin-top: 32rem;
    margin-bottom: 16rem;
`

const Box = styled.p`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 8rem 16rem;
    color: ${colours.light};
` 

const MethodBox = styled(Box)`
    border-radius: 4rem 0 0 4rem;
    background: ${colours.dark2};
`

const PathBox = styled(Box)`
    border-radius: 0 4rem 4rem 0;
    background-color: ${colours.dark};
    margin-right: 16rem;
    min-width: 80rem;
`

export default function Method ({ type, path, summary }) {

    return (
        <Header>
            <MethodBox>{ type }</MethodBox>
            <PathBox>{ path }</PathBox>
            <p>{ summary }</p>
        </Header>
    )
}
