import styles from './Specialist.module.css'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const Specialist = () => {
  return (
    <>
      <Box className={styles.specialHeader} >
        <Heading className={styles.heading} >Search by Specialist</Heading>
      </Box>

      <Box className={styles.specialContainer} >
        <Box className={styles.specialWrapper} >
          <Box className={styles.specialList} >
            <SimpleGrid minChildWidth='120px' spacing='40px'>
              <Box className={styles.lists} >
                <Image src='./assets/Rectangle 17.png' alt='specialist' className={styles.imageGroup} />
                <Heading size='sm'>Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists} >
                <Image src='./assets/Rectangle 18.png' alt='specialist' className={styles.imageGroup} />
                <Heading size='sm'>Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists} >
                <Image src='./assets/Rectangle 19.png' alt='specialist' className={styles.imageGroup} />
                <Heading size='sm'>Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>

              <Box className={styles.lists} >
                <Image src='./assets/Rectangle 20.png' alt='specialist' className={styles.imageGroup} />
                <Heading size='sm'>Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>

            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Specialist
