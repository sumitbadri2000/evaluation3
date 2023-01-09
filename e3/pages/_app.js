import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Component/Navbar'
import '../styles/globals.css' 

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
    <Navbar />
<Component {...pageProps} />
    </ChakraProvider>
  ) 
}
