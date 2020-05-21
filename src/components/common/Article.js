import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    > p {
        margin-top: 8rem;
        /* margin-bottom: 16rem; */
    }
    > h1 { 
        margin-top: 8rem;
        /* margin-bottom: 8rem; */
    }
    > h2 { 
        margin-top: 8rem;
        /* margin-bottom: 100rem; */
    }
    > h3 { 
        margin-top: 8rem;
        /* margin-bottom: 16rem; */
    }
    > h4 { 
        margin-top: 24rem;
        /* margin-bottom: 8rem; */
    }
    > h5 { 
        margin-top: 16rem;
        /* margin-bottom: 8rem; */
    }
    > h6 { 
        margin-top: 8rem;
        /* margin-bottom: 8rem; */
    }
`


export default function Article({ children }) {
    return (
        <Container>{children}</Container>
    )
}
