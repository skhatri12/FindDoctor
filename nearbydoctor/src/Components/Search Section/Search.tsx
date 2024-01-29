import styles from "./Search.module.css";
import { Box, Button, Input, Image, Text } from "@chakra-ui/react";
const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];
const Search = () => {
  return (
    <Box
      className={styles.searchWrapper}
      display="flex"
      px="30px"
      w="100%"
      maxW="1300px"
      m="0 auto"
      justifyContent="center"
    >
      <Box
        className={styles.firstWrapper}
        bgColor="#6E9CC7"
        p="30px"
        paddingLeft=" clamp(3rem, 2.3500rem + 3.2500vw, 6.25rem)"
        borderRadius="10px"
        flex="1"
        maxW="100%"
        height="fit-content"
        mt="50px"
      >
        <Box className={styles.topSearch} gap='20px' justifyContent='space-between'>
          <Box className={styles.searchSection}>
            <Image src="./assets/search.png" alt="search" />
            <Input
              type="text"
              placeholder="Search by Doctors"
              className={styles.inputText}
            />
          </Box>
          <Box className={styles.locationSection}>
            <Image src="./assets/Location.png" alt="location" />
            <Input
              type="text"
              placeholder="Search by Location"
              className={styles.inputText}
            />
          </Box>
          <Box className={styles.wsearchSection} >
            <Image src="./assets/wsearch.png" alt="search" />
          </Box>
        </Box>
        <Box className={styles.sectionText}>
          <Text>You may be looking for</Text>
        </Box>
        <Box className={styles.bottomSearch}>
          {list.map((item, index) => (
            <Box className={styles.departList} key={index}>
              {item}
            </Box>
          ))}
          <Button bg="#08337DBA" color="white">
            More
          </Button>
        </Box>
      </Box>
      <Box className={styles.secondWrapper}>
        <Image src="./assets/ellipse.png" alt="ellipse" />
        <Box className={styles.secondImgWrapper}>
          <Image src="./assets/first.png" alt="image" />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
