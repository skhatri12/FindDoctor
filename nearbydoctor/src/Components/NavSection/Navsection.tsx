import styles from './Navsection.module.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search Section/Search'

const Navsection = () => {
  return (
    <div className={styles.mainSection}>
      <Navbar />
      <Search />
    </div>
  )
}

export default Navsection
