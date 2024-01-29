import { Box, Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box bg="#738CE2AD" >
      <Box maxW='1300px' m="0 auto" p="20px 10px 40px 50px">
        <Heading size='2xl' >
          About us:
        </Heading>
        <Box display="flex" flexDirection="column" paddingTop="25px" paddingLeft="5px">
          <Text fontSize='md' as='b' >email: youremail@gmail.com</Text>
          <Text fontSize='md' as='b'>mobile: +91 98xxxxxx10</Text>
        </Box>
      </Box>
    </Box >
  )
}

export default Footer
