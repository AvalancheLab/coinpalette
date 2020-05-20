import React from 'react'
import styled from 'styled-components'
import Ident from './Ident';
import Button from '../components/common/Button'
import NavItem from '../components/common/NavItem'

const Container = styled.div`
    display: flex;
`

const Nav = styled.nav`
    display: flex;
    grid-auto-flow: column;
    grid-gap: 20rem;
    place-items: center;
    margin-left: auto;
`

export default function NavBar() {
    return (
        <Container>
            <Ident/>

            <Nav>
                <NavItem link="#!">Source Code</NavItem>
                <Button href="#!">SHARE</Button>
            </Nav>
        </Container>
    )
}
