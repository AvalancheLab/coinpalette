import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'
import { fluid } from '../styles/Utils'
// import { Scrollbars } from 'react-custom-scrollbars';


const Container = styled.div`
    margin-top: 24rem;
    margin-bottom: 48rem;
    /* border: 0.5px solid ${colours.light2}; */
    box-shadow: 16rem 24rem 48rem ${colours.light3};
`
const Header = styled.h6`
    ${fluid('padding-top', '16rem', '16rem')}
    ${fluid('padding-bottom', '16rem', '16rem')}
    ${fluid('padding-right', '16rem', '24rem')}
    ${fluid('padding-left', '16rem', '24rem')}
    background: ${colours.dark};
    color: ${colours.light};
    border-bottom: 0.5px solid ${colours.light2}; 
`

const Content = styled.div`
    color : ${colours.dark2};
    background: ${colours.light};
    ${fluid('padding-top', '16rem', '24rem')}
    ${fluid('padding-bottom', '16rem', '24rem')}
    ${fluid('padding-right', '24rem', '32rem')}
    ${fluid('padding-left', '24rem', '32rem')}
    overflow-x: scroll;
`


export default function Box({ title, children }) {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{children}</Content>
        </Container>
    )
}
