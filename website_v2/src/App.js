import React from 'react'
import styled from 'styled-components'
import Reset from './styles/Reset'
import Typography from './styles/Typography'
import Landing from './sections/Landing'
import { colours } from './data/variables'
import Docs from './sections/Docs'
import Footer from './sections/Footer'

const Page = styled.div`
    min-height: 100vh;
    width: 100%;
    /* padding: 80rem; */
    background: ${colours.light};
`

export default function App () {
    return (
        <Page>
            <Reset/>
            <Typography/>
            <Landing/>
            <Docs/>
            <Footer/>
        </Page>
    )
}
