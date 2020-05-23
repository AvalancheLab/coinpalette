import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'
import Burger from '../assets/burger.svg'

const Container = styled.div`
    margin: 0 auto;
    position: absolute;
    padding-top: 40rem;
    padding-bottom: 32rem;
    width: 156rem;
    right: 0rem;
    border-radius: 4rem 0 0 4rem;
    background: ${colours.light};
    color: ${colours.dark2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const CloseButton = styled.button`
    background-image: url(${Burger});
    background-size: cover;
    height: 32rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 32rem;
    margin-left: auto;
`

export default function FlyoutMenu({ closeFlyout, children }) {
    return (
    <Container onMouseLeave={closeFlyout}>
        <CloseButton onClick={closeFlyout}></CloseButton>
        {children}
    </Container>
    )
}
