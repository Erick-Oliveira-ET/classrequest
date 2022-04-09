import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Spacer,
  Heading,
  VStack,
  HStack,
  useToast,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassItemComponent from "../ClassItemComponent";
import NavBar from "../Nav";

const InstructionsModal = () => {
  const toast = useToast();

  const [isOpen, setIsOpen] = useState(true);
  const [isNormalClassTaken, setIsNormalClassTaken] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("@classRequest-firstTime");
    const firstTime = temp ? JSON.parse(temp) : true;
    if (!firstTime) {
      setIsOpen(false);
    }
  });

  const handleClose = () => {
    localStorage.setItem("@classRequest-firstTime", JSON.stringify(false));
    setIsOpen(false);
  };

  const handleNormalClassTakenClick = () => {
    setIsNormalClassTaken(!isNormalClassTaken);
  };

  const handleBlockedClassClick = () => {
    toast({
      title: "Matéria Bloqueada",
      description:
        "Pré-requisito não concluido: Cálculo Diferencial e Integral I",
      status: "error",
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bem-vindo!!!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} textAlign="center">
            <Text>
              {" "}
              Esse site interativo é um fluxograma da Faculdade de Mecatrônica
              da Universidade Federal de Uberlândia.
            </Text>
            <Heading fontSize="xl">Como utilizar?</Heading>
            <Text>
              As matérias em cinza são as não cursadas. Para marcá-las como
              cursadas, é necessário clica-las e assim ficarão em verde.
            </Text>
            <ClassItemComponent
              classItem={{
                name: "Cálculo Diferencial e Integral I",
                code: "FAMAT49010",
                classHrs: 6,
                labHrs: 0,
                totalHrs: 6,
              }}
              onClick={handleNormalClassTakenClick}
              status={isNormalClassTaken ? "taken" : "free"}
            />
            <Text>
              As matérias em vermelho são as que não podem ser feitas por falta
              de pré-requisitos. Para verificar quais os pré-requisitos que
              bloqueiam a matéria, clique na matéria bloqueada e um alerta
              surgirá.
            </Text>
            <ClassItemComponent
              classItem={{
                name: "Cálculo Diferencial e Integral II",
                code: "FAMAT49020",
                requirementCode: "FAMAT49010",
                classHrs: 6,
                labHrs: 0,
                totalHrs: 6,
              }}
              onClick={handleBlockedClassClick}
              hasTakenPrerequisite={false}
              status="specialBlocked"
            />
            <Text>
              Para ver a quantidade de horas, clique no botão com ícone de
              relógio. Um menu aparecerá com a quantidade de horas necessárias e
              quanto foi concluido.
            </Text>
            <Box
              width="100%"
              border="1px solid "
              borderColor="gray.500"
              borderRadius="5px"
              alignContent={"center"}
            >
              <NavBar />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Prosseguir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructionsModal;
