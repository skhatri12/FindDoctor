import styles from './Specialist.module.css'
import { SimpleGrid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const Specialist = () => {
  return (
    <>
      <div className={styles.specialHeader} >
        <h3>Search by Specialist</h3>
      </div>

      <div className={styles.specialContainer} >
        <div className={styles.specialWrapper} >
          <div className={styles.specialList} >
            <SimpleGrid minChildWidth='120px' spacing='40px'>
              <div className={styles.lists} >
                <Image src='./assets/Rectangle 17.png' alt='specialist' className={styles.imageGroup} />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists} >
                <Image src='./assets/Rectangle 18.png' alt='specialist' className={styles.imageGroup} />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists} >
                <Image src='./assets/Rectangle 19.png' alt='specialist' className={styles.imageGroup} />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

              <div className={styles.lists} >
                <Image src='./assets/Rectangle 20.png' alt='specialist' className={styles.imageGroup} />
                <h4>Dr: Name Name</h4>
                <p>Doctor degree name</p>
              </div>

            </SimpleGrid>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specialist
