import styles from './Search.module.css'
import { Button } from '@chakra-ui/react'
const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];
const Search = () => {
  return (
    <div className={styles.searchWrapper} >
      <div className={styles.firstWrapper} >
        <div className={styles.topSearch} >
          <div className={styles.searchSection} >
            <img src="./assets/search.png" alt="search" />
            <input type="text" placeholder='Search by Doctors' className={styles.inputText} />
          </div>
          <div className={styles.locationSection} >
            <img src="./assets/Location.png" alt="location" />
            <input type="text" placeholder='Search by Location' className={styles.inputText} />
          </div>
          <div className={styles.wsearchSection} >
            <img src="./assets/wsearch.png" alt="search" />
          </div>
        </div>
        <div className={styles.sectionText} >
          <p>You may be looking for</p>
        </div>
        <div className={styles.bottomSearch} >
          {list.map((item, index) => (
            <div className={styles.departList} key={index} >
              {item}
            </div>
          ))}
          <Button bg='#08337DBA' color='white'>More</Button>
        </div>
      </div>
      <div className={styles.secondWrapper} >
        <img src="./assets/ellipse.png" alt="ellipse" />
        <div className={styles.secondImgWrapper} >
          <img src="./assets/first.png" alt="image" />
        </div>
      </div>
    </div>

  )
}

export default Search
