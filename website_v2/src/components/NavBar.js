import React from 'react'
import styled from 'styled-components'
import Ident from './Ident';
import Button from '../components/common/Button'
import NavItem from '../components/common/NavItem'
import BurgerIcon from '../assets/burger.svg'

const Container = styled.div`
    display: flex;
`

const Nav = styled.nav`
    display: flex;
    grid-auto-flow: column;
    grid-gap: 20rem;
    place-items: center;
    margin-left: auto;
    @media only screen and (max-width: 800px ) {
        display: none;
    }
`

const Burger = styled.img`
    margin-left: auto;
    height: 32rem;
    @media only screen and (min-width: 800px ) {
        display: none;
    }
`

const ShareButton = styled(Button)`
    margin-left: 24rem;
`



export default function NavBar() {
    return (
        <Container>
            <Ident/>
            <Burger src={BurgerIcon}/>
            <Nav>
                <NavItem link="#!">Source Code</NavItem>
                <ShareButton href="#!">SHARE</ShareButton>
            </Nav>
        </Container>
    )
}
