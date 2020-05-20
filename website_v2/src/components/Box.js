import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'

const Container = styled.div`
    margin-top: 24rem;
    margin-bottom: 40rem;
    /* border: 0.5px solid ${colours.light2}; */
    box-shadow: 16rem 24rem 48rem ${colours.light3};
`
const Header = styled.h6`
    padding: 16rem 24rem;
    background: ${colours.dark};
    color: ${colours.light};
    border-bottom: 0.5px solid ${colours.light2}; 
`

const Content = styled.div`
    color : ${colours.light};
    background: ${colours.dark2};
    padding: 24rem 32rem;
`

export default function Box({ title, children }) {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{children}</Content>
        </Container>
    )
}
