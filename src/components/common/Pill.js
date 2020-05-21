import React from 'react'
import styled from 'styled-components';
import {colours} from '../../data/variables';

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Left = styled.p`
    border-radius: 2rem 0 0 2rem;
    background: ${colours.dark2};
`

const Right = styled.p`
    border-radius: 0 2rem 2rem 0;
    background: ${colours.dark};
`

export default function Pill({left, right}) {
    return (
        <Container>
            <Left>{left}</Left>
            <Right>{right}</Right>
        </Container>
    )
}
