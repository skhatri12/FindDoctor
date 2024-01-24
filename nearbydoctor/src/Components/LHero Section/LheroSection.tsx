import styles from './LheroSection.module.css';
import { Heading } from '@chakra-ui/react';
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';

const statements = ["We are here to hear and heal your health problems", "It is not only about the money", "More than just treating patients"];

const LheroSection = () => {
  return (
    <div className={styles.topHerosection}>
      <div className={styles.topheroInnerWrapper}>
        <div className={styles.leftHeroWrapper}>
          <Heading>Find the right Doctor Right at your fingertips</Heading>
          <div className={styles.leftText}>
            <img src="./assets/psearch.png" alt="search" className={styles.leftImg} />
            <InputGroup className={styles.inputwithImg}>
              <Input type="text" bg='#CFD5E1' placeholder="Search Nearest hospital" className={styles.inputText} />
              <InputRightAddon bg='#CFD5E1'>
                <Image src="./assets/lpsearch.png" alt="" className={styles.inputImg} boxSize="20px" />
              </InputRightAddon>
            </InputGroup>
          </div>
          <div className={styles.listStatement}>
            {statements.map((key, index) => (
              <ul key={index}>
                <li>{key}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className={styles.rightHeroWrapper}>
          <Image src='./assets/Rectangle 22.png' alt='rect' className={styles.rectangle22} />
          <div className={styles.rightHeroImage} >
            <Image src='./assets/Rectangle 23.png' alt='rect' className={styles.rectangle23} />
            <div className={styles.rightFrontImage} >
              <Image src='./assets/image 1.png' alt='rect' className={styles.image1} />

            </div>
            <p>Top rated primary care physicians</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LheroSection;
