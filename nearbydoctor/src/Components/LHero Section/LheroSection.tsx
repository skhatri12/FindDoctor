import styles from './LheroSection.module.css';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';

const statements = ["We are here to hear and heal your health problems", "It is not only about the money", "More than just treating patients"];

const LheroSection = () => {
  return (
    <Box className={styles.topHerosection}>
      <Box className={styles.topheroInnerWrapper} maxW="1300px" margin="0 auto" display="flex" padding="70px 50px 30px 60px" justifyContent="space-between" gap="10px" >
        <Box className={styles.leftHeroWrapper} maxW="350px" >
          <Heading>Find the right Doctor Right at your fingertips</Heading>
          <Box className={styles.leftText} display="flex" gap="10px" marginTop="25px">
            <Image src="./assets/psearch.png" alt="search" className={styles.leftImg} w="20px" height="20px" marginTop="10px" />
            <InputGroup className={styles.inputwithImg}>
              <Input type="text" bg='#CFD5E1' placeholder="Search Nearest hospital" className={styles.inputText} w="fit-content" />
              <InputRightAddon bg='#CFD5E1'>
                <Image src="./assets/lpsearch.png" alt="" className={styles.inputImg} boxSize="20px" />
              </InputRightAddon>
            </InputGroup>
          </Box>
          <Box className={styles.listStatement} paddingLeft="30px" paddingRight="0px" paddingTop="15px" >
            {statements.map((key, index) => (
              <ul key={index}>
                <li>{key}</li>
              </ul>
            ))}
          </Box>
        </Box>
        <Box className={styles.rightHeroWrapper}>
          <Image src='./assets/Rectangle 22.png' alt='rect' className={styles.rectangle22} />
          <Box className={styles.rightHeroImage} >
            <Image src='./assets/Rectangle 23.png' alt='rect' className={styles.rectangle23} />
            <Box className={styles.rightFrontImage} >
              <Image src='./assets/image 1.png' alt='rect' className={styles.image1} />

            </Box>
            <Text>Top rated primary care physicians</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LheroSection;
