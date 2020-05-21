import React from 'react'
import styled from 'styled-components'
import Ident from './Ident';
import Button from '../components/common/Button'
import Link from '../components/common/Link'
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
    margin-left: 16rem;
`

export default function NavBar() {
    return (
        <Container>
            <Ident/>
            <Burger src={BurgerIcon}/>
            <Nav>
                <Link data-url="https://www.coinpalette.com" to="https://github.com/AvalancheLab/coinpalette"><p>Source Code</p></Link>
                <Link to="http://www.twitter.com/share?url=https://www.coinpalette.com/">
                    <ShareButton >
                        SHARE
                    </ShareButton>
                </Link>
            </Nav>
        </Container>
    )
}
