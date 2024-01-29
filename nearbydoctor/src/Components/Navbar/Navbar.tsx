import styles from './Navbar.module.css'
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
const menus = ["Home", "Doctors", "FAQ", "About", "Contact"]
const Navbar = () => {
  return (
    <Box className={styles.navbarWrapper} >
      <Box className={styles.innernavbarWrapper} padding="20px 100px 10px 120px" >
        <Box className={styles.navList} maxW="1300px" m="0 auto" display="flex" gap="40px" alignItems="center" justifyContent="end" >
          <Box className={styles.hamburgerMenu} >
            <i className="fa-solid fa-bars"></i>
          </Box>
          {menus.map((menu, index) => (
            <Box key={index} className={styles.menuItem} >
              {<Text className={styles.txt} fontWeight='600' fontSize='clamp(1rem, 0.9500rem + 0.2500vw, 1.25rem)' >{menu}</Text>}
            </Box>
          ))}
          <Box className={styles.navBtn} >
            <ButtonGroup gap='4'>
              <Button bg='black' color='white'>Login</Button>
              <Button bg='#004F95' color='white'>Sign up</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
