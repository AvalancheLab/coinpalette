import React from 'react'
import styled from 'styled-components'
import SideNav from 'styled-components'
import Box from '../components/Box'
import Method from '../components/Method'
import methods from '../data/methods.json'

export default function Docs() {

    const Container = styled.div`
        display: flex;
    `
    const Docs = styled.div`
    
    `

    return (
        <Container>
            <SideNav/>
            <Docs>
                <h1>API V1.0</h1>
                <p>CoinPalette is a simple REST API providing colours for cryptocurrency logos.</p>
                <h3>Example</h3>
                <p></p>
                <Box title="Request">
                    <code></code>
                </Box>
                <p></p>
                <Box title="Response">
                    <code></code>
                </Box>
                <p></p>

                {methods.map(method => <Method {...method} />)}

                
               </Docs>
        </Container>
    )
}
