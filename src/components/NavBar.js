import React, { useState } from 'react'
import styled from 'styled-components'
import Ident from './Ident';
import Button from '../components/common/Button'
import Link from '../components/common/Link'
import BurgerIcon from '../assets/burger.svg'
import FlyoutMenu from './FlyoutMenu';

const Container = styled.div`
    display: flex;
    position: relative;
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

    const [showFlyout, setShowFlyout] = useState(false);

    return (
        <Container>
            <Ident/>
            <Burger onClick={() => setShowFlyout(!showFlyout)} src={BurgerIcon}/>
            {showFlyout ? <FlyoutMenu closeFlyout={() => setShowFlyout(!showFlyout)}>
                <Link to="https://github.com/AvalancheLab/coinpalette"><p>Source Code</p></Link>
                <Link to="http://www.twitter.com/share?url=https://www.coinpalette.com/"><p>SHARE</p></Link>
            </FlyoutMenu> : null }
            <Nav>
                <Link to="https://github.com/AvalancheLab/coinpalette"><p>Source Code</p></Link>
                <Link to="http://www.twitter.com/share?url=https://www.coinpalette.com/"><ShareButton >SHARE</ShareButton></Link>
            </Nav>
        </Container>
    )
}
