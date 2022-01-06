import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack, VStack, SimpleGrid, Center } from "@chakra-ui/react";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Recently from '../components/RecentlyPlayed'
const projects = [
  {
    key: 1,
    name: "Spinners",
    description:"Terminal spinners in vlang",
    link:"https://github.com/rhygg/spinners",
    type:"Community",
    logo:"https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/HyperTerm_a_Terminal_built_on_open_web_standards.png"

  },
  {
    key: 2,
    name: "UpbeatRadio",
    description: "A community powered internet radio station!",
    link:"https://upbeatradio.net",
    type:"Web App",
    logo:"https://cdn.discordapp.com/attachments/857185757394108457/913307666263191552/UB_Logo.png"
  },
    {
    key: 3,
    name: "Shiro",
    description: "A Multipurpose discord bot used by over 20k servers!",
    link:"https://shirobot.org",
    type:"Discord Bot",
    logo:"https://cdn.discordapp.com/attachments/917772093863637012/917772623964942346/Shiro4096.png"
  },

]
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
          <Heading mb={2}>Henlo! This is rhydderchc!</Heading>
          <Text color={colorSecondary[colorMode]}>
            I'm a hobbyist developer, artist and currently a student.
            I love learning new stuff. Currently using typescript, golang and rust as 
            my tech stack. Love meeting new people. 
            Occassionally blog, so check it out!
          </Text>
        </Flex>
      </Stack>
      <Center as="section" w="100%">
          <VStack align="start" spacing={8}>
             <Heading size="lg">Projects</Heading>
            <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  logo={project.logo}
                  link={project.link}
                  type={project.type}
                />
              ))}
            </SimpleGrid>
          </VStack>
          </Center>
          <Heading size="lg">Recently Played</Heading>
          <Center as="section" w="100%">
          <VStack align="start" spacing={8}>
            <Recently />
          </VStack>
          </Center>
    </Container>
  );
}
