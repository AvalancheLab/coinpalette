import React from 'react'
import styled from 'styled-components'
import Ident from 'Ident'
import Button from 'Button'

export default function Header() {

    const Container = styled.div`
        display: flex;
        align-items: center;
    `

    const Nav = styled.div`
        display: grid;
        grid-auto-flow: column;
        margin-left: auto;
    `

    const NavItem = styled.a`

    `

    return (
        <Container>
            <Ident/>
            <Nav>
                <NavItem>Source Code</NavItem>
                <Button>Share</Button>
            </Nav>
        </Container>
    )
}
