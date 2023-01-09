import Head from 'next/head';
import {Box,Text, Container,Heading,Image, Button, Flex,Grid,GridItem} from "@chakra-ui/react"

// const inter = Inter({ subsets: ['latin'] })

export default function Home({gets}) {
  console.log(gets)
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Box>
        <Box>
          <Heading>INTRO</Heading>
          <Container>
            <Box margin="auto" width="70%">
              <Image src={gets.avatar_url} alt="" borderRadius="100%" width="30%"/>
            </Box>
            <Box margin="auto" width="70%">
              <Heading>{gets.name}</Heading>
              <Text>{gets.bio}</Text>
            </Box>
            <Flex marginTop={3} gap="5px">
              <Button href="">Resume</Button>
              <Button href="https://github.com/sumitbadri2000">Follow</Button>
            </Flex>
          </Container>
        </Box>
        <Box>
          <Heading>TECH STACK</Heading>
          <Container marginTop="10px">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%' h='6' bg='blue.500' color="white">REACT.JS</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">NODE.JS</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">CSS</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">HTML</GridItem>
            </Grid>
          </Container>
          <Container marginTop="10px">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%' h='6' bg='blue.500' color="white">CHAKRA UI</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">JS</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">GITHUB</GridItem>
              <GridItem w='100%' h='6' bg='blue.500' color="white">NEXT.JS</GridItem>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Heading>EDUCATION</Heading>
          <Container marginTop="10px">
            <Text>MAsai School</Text>
            <Text>Full Stack Web Developer(Full Time)</Text>
          </Container>
        </Box>
      </Box>
    </>
  )
}




export async function getStaticProps(){
  let res = await fetch("https://api.github.com/users/sumitbadri2000")
  let data = await res.json()
  return{
    props:{
      gets:data
    }
  }
}
