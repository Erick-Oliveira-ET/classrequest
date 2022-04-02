import type { NextPage } from "next";
import Head from "next/head";
import classesArray, { specialRequiredActivities } from "../../classes";
import SemesterColumn, { style } from "@/components/semesterColumn";
import { useProfile } from "context/Profile";
import NavBar from "@/components/Nav";
import { ClassItem } from "@/interfaces/classes";
import { Center, Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import ClassItemComponent from "@/components/ClassItemComponent";
import ComplementaryActivitiesItem from "@/components/ComplementaryActivitiesItem";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { SemesterColumnsContainer } from "@/styles/theme";

const Home: NextPage = () => {
  const { updateInternshipStatus, isRequiredInternshipTaken, hoursCompleted } =
    useProfile();

  const internshipStatus = isRequiredInternshipTaken
    ? "taken"
    : specialRequiredActivities.requiredInternship.requiredHours >
      hoursCompleted
    ? "blocked"
    : "free";

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      p={5}
      minH="100vh"
      align="center"
    >
      <Head>
        <title>Fluxograma Mecatrônica</title>
        <meta
          name="description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Engenharia Mecatrônica da Universidade Federal de Uberlândia (UFU) utilizando o fluxograma oficial do curso."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Flex direction="column">
        <SemesterColumnsContainer
          overflowX={"auto"}
          p={"0 15px"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          {classesArray.map((item: ClassItem[], index) => {
            return (
              <SemesterColumn
                key={"Período-" + index}
                semesterNumber={index + 1}
                semesterClasses={item}
              />
            );
          })}
        </SemesterColumnsContainer>

        <Divider p="10px 0px" />

        <HStack justify="center" p="10px">
          <VStack>
            <ClassItemComponent
              classItem={specialRequiredActivities.requiredInternship}
              style={style[internshipStatus]}
              onClick={
                internshipStatus !== "blocked"
                  ? updateInternshipStatus
                  : () => {}
              }
            />
          </VStack>
          <ComplementaryActivitiesItem
            classItem={
              specialRequiredActivities.complementaryAcademicActivities
            }
          />
        </HStack>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
