import { Poppins } from 'next/font/google'
import { Contents } from './content'
import { Box, Container } from '@chakra-ui/react'
import { Header } from './header'
import Bio from './memories'
import Funny from './funny';
import Goodbye from './bye'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <Container px="0rem" maxW="110rem" className={poppins.className}>
      <Header/>
      <Bio />
      <Funny />
      <Goodbye />
      {/* <Contents/> */}
      {/* <Content /> */} 
    </Container>
  )
}