import {Box, Flex,Spacer} from "@chakra-ui/react"
import Link from "next/link"

const Navbar =() =>{
    return (
        <Flex margin="auto" bg="gray" padding="20px" >
            <Box p="4" bg="blue">
                <Link href="/">Home</Link>
            </Box>
            <Spacer />
            <Box p="4" bg="blue">
                <Link href="/Project">Projext</Link>
            </Box>
        </Flex>
    )
}

export default Navbar;