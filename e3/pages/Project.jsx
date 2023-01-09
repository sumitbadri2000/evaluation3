import { Container,Box,Text, Heading, Flex ,Spacer} from "@chakra-ui/react"
import { useState } from "react"




const Project = ({proj}) =>{
    const [p,setP] = useState(proj)
    return (
        <Box>
          <Heading textAlign="center">PROJECT</Heading>
          {p.map((e)=>(
            <Box border="1px solid black" width="40%" margin="auto" marginTop="40px" key={e.id}>
              <Container marginTop="40px">
                <Heading>{e.name}</Heading>
                <Flex>
                  <Box p='4'>{e.stargazers_count}</Box>
                  <Spacer />
                  <Box p='4'>{e.forks_count}</Box>
                  <Spacer />
                  <Box p='4'>{e.language}</Box>
                </Flex>
              </Container>
            </Box>
          ))}
        </Box>
    )
}

export default Project

export async function getStaticProps(){
  let res = await fetch("https://api.github.com/search/repositories?q=user:sumitbadri2000+fork:true&sort=updated&per_page=10&type=Repositories")
  let data = await res.json()
  return{
    props:{
      proj:data.items
    }
  }
}