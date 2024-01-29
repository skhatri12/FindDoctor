// import styles from './Navsection.module.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search Section/Search'
import { Box } from '@chakra-ui/react'

const Navsection = () => {
  return (
    <Box backgroundColor='#D9D9D9' mt='15px'>
      <Navbar />
      <Search />
    </Box>
  )
}

export default Navsection
