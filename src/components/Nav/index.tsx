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
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { useProfile } from "context/Profile";

const NavBar = () => {
  const { hoursCompleted } = useProfile();

  return (
    <Flex justify="end" w="100%" p="5px 5px 0px 0px">
      <Menu>
        <Tooltip aria-label="tooltip" label="Carga Horária para Integralização">
          <Box display="inline-block">
            <MenuButton>
              <TimeIcon _hover={{ cursor: "pointer" }} />
            </MenuButton>
          </Box>
        </Tooltip>
        <MenuList p="5px 10px">
          <Heading as="h4" size="sm" padding={"4px 0px 7px 0px"}>
            Carga Horária para Integralização
          </Heading>
          <Divider m="2px" />
          Horas Integralizada: {hoursCompleted} / 3.690
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavBar;
