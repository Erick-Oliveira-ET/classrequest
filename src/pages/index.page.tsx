import type { NextPage } from "next";
import Head from "next/head";
import classesArray from "../../classes";
import SemesterColumn from "@/components/semesterColumn";
import { useProfile } from "context/Profile";
import NavBar from "@/components/Nav";
import { ClassItem } from "@/interfaces/classes";
import { Center, Flex, HStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { classTaken } = useProfile();

  return (
    <Flex direction="column" w="100%" h="100%" minH="100vh" align="center">
      <Head>
        <title>Fluxograma Mecatrônica</title>
        <meta
          name="description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Engenharia Mecatrônica da Universidade Federal de Uberlândia (UFU) utilizando o fluxograma oficial do curso."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Flex w="100%" p="0 20px" maxW="1500px">
        <HStack>
          {classesArray.map((item: ClassItem[], index) => {
            return (
              <SemesterColumn
                key={index}
                seen={classTaken}
                semesterClasses={item}
              />
            );
          })}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Home;
