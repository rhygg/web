import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>rhydderchc - home</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Zahid</Heading>
          <Text color={colorSecondary[colorMode]}>
            I'm a hobbyist developer, artist and currently a student.
            I love learning new stuff. Currently using typescript, golang and rust as 
            my tech stack. Love meeting new people. 
            Occassionally blog, so check it out!
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
