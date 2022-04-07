import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { useProfile } from "context/Profile";

const NavBar = () => {
  const {
    hoursCompleted,
    isComplementaryActivitiesTaken,
    isRequiredInternshipTaken,
  } = useProfile();

  return (
    <Flex justify="end" w="100%" maxW={"100vw"} p="5px">
      <Menu>
        <Tooltip aria-label="tooltip" label="Carga Horária para Integralização">
          <Box display="inline-block">
            <MenuButton>
              <TimeIcon _hover={{ cursor: "pointer" }} />
            </MenuButton>
          </Box>
        </Tooltip>
        <MenuList p="5px 10px" maxW={"100vw"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Carga Horária para Integralização</Th>
                <Th isNumeric>Integralizada/Exigida</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Obrigatórias</Td>
                <Td isNumeric>{hoursCompleted}/3.690</Td>
              </Tr>
              <Tr>
                <Td>Atividades Complementares</Td>
                <Td isNumeric>{isComplementaryActivitiesTaken ? 30 : 0}/30</Td>
              </Tr>
              <Tr>
                <Td>Estágio Obrigatório</Td>
                <Td isNumeric>{isRequiredInternshipTaken ? 180 : 0}/180</Td>
              </Tr>
            </Tbody>
          </Table>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavBar;
