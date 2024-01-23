import styles from './Herosection.module.css';
import { Input, InputGroup } from "@chakra-ui/react";
const statements = ["We are here to hear and heal your health problems", "It is not only about the money", "More than just treating patients"];

const Herosection = () => {
  return (
    <>
      <div className={styles.herosectionWrapper} >
        <div className={styles.herosectionInnerWrapper} >
          <div className={styles.leftheroWrapper}>
            <h2>Find the right Doctor Right at your fingertips</h2>
            <div className={styles.leftText} >
              <img src="./assets/psearch.png" alt="search" className={styles.leftImg} />
              <InputGroup className={styles.inputwithImg} >
                <Input type="text" bg='#CFD5E1' placeholder="Search Nearest hospital" className={styles.inputText} />
                <img src="./assets/lpsearch.png" alt="" className={styles.inputImg} />
              </InputGroup>
            </div>
            <div className={styles.listStatement} >
              {statements.map((key, index) => (
                <ul key={index} >
                  <li>{key}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className={styles.rightheroWrapper} >
            <div className={styles.rightImageContainer} >
              <img src="./assets/Rectangle 22.png" alt="Rectangle" className={styles.imageLayer0} />
              <img src="./assets/Rectangle 23.png" alt="Rectangle" className={styles.imageLayer1} />
              <img src="./assets/image 1.png" alt="image" className={styles.imageLayer2} />
            </div>
          </div>

        </div>
      </div>
      <div>
        <h3 className={styles.imageCaption} >Top rated primary care physicians</h3>
      </div>
    </>
  )
}

export default Herosection;
