import styles from './Header.module.css'
import { Box, Heading } from '@chakra-ui/react'
const Header = () => {
  return (
    <Box className={styles.headerWrapper} maxW="1300px" margin="0 auto">
      <Box className={styles.hinnerWrapper} paddingTop=" clamp(0.7rem, 0.6272rem + 0.3107vw, 1rem)" paddingLeft="clamp(10rem, 9.5146rem + 2.0712vw, 12rem)">
        <Heading bg='#528BBF' fontSize="clamp(2.25rem, 2.1375rem + 0.5625vw, 2.8125rem)" w="fit-content"
          padding="5px" borderRadius="15px" className={styles.topHeader}>Find Doctors Near By</Heading>
      </Box>
    </Box>
  )
}

export default Header
