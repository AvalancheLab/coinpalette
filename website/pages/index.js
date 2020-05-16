import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../sections/Footer'
import Header from '../components/Header'
import Docs from '../sections/Docs';

export default Home = () => {

  const GlobalStyle = styled.globalStyle`
    body {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }  
  `

  const Footer = styled(Footer)`
    margin-top: auto;
  `

  return (
    <>
      <Head>
        <title>CoinPalette</title>
      </Head>
      <GlobalStyle/>
      <Header/>
      <Docs/>
      <Footer/>
    </>
  )
}
