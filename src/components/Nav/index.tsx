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
    <Flex justify="end" w="100%" p="5px">
      <Menu>
        <Tooltip aria-label="tooltip" label="Carga Horária para Integralização">
          <Box display="inline-block">
            <MenuButton>
              <TimeIcon _hover={{ cursor: "pointer" }} />
            </MenuButton>
          </Box>
        </Tooltip>
        <MenuList p="5px 10px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Carga Horária para Integralização</Th>
                <Th isNumeric>Integralizada</Th>
                <Th isNumeric>Exigida</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Obrigatórias</Td>
                <Td isNumeric>{hoursCompleted}</Td>
                <Td isNumeric>3.690</Td>
              </Tr>
              <Tr>
                <Td>Atividades Complementares</Td>
                <Td isNumeric>{isComplementaryActivitiesTaken ? 30 : 0}</Td>
                <Td isNumeric>30</Td>
              </Tr>
              <Tr>
                <Td>Estágio Obrigatório</Td>
                <Td isNumeric>{isRequiredInternshipTaken ? 180 : 0}</Td>
                <Td isNumeric>180</Td>
              </Tr>
            </Tbody>
          </Table>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavBar;
