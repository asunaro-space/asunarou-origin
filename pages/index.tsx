import type { NextPage } from 'next'
import Header from './component/Header'
import MainContents from './component/MainContents'
import Footer from './component/Footer'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContents />
      <Footer />
    </>
  )
}

export default Home
