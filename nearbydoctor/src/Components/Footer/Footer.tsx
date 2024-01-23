import styles from './Footer.module.css'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
const Footer = () => {
  return (
    <div className={styles.footerSection} >
      <div className={styles.footerWrapper} >
        <Heading size='2xl' >
          About us:
        </Heading>
        <div className={styles.footerInfo} >
          <Text fontSize='md' as='b' >email: youremail@gmail.com</Text>
          <Text fontSize='md' as='b'>mobile: +91 98xxxxxxxx10</Text>
        </div>
      </div>

    </div>
  )
}

export default Footer
