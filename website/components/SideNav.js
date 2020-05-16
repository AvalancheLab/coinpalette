import React from 'react'
import styled from 'styled-components'

export default function SideNav() {

    const Container = styled.div`
        display: flex;
    `

    const Nav = styled.nav`
        text-align: right;
    `

    const NavItem = styled.p`
    
    `

    return (
        <Container>
            <Nav>
                <NavTitle></NavTitle>
                <NavItem>Example</NavItem>
                <NavItem>Docs</NavItem>
                <NavItem></NavItem>
            </Nav>

        </Container>
        
    )
}
