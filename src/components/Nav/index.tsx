import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useProfile } from "context/Profile";

const NavBar = () => {
  const { hoursCompleted } = useProfile();

  return (
    <Flex>
      <Box p="2px  6px 3px 2px">
        <Spacer />
        <Heading size="md">
          Horas Integralizada: {hoursCompleted} / 3.690
        </Heading>
      </Box>
    </Flex>
  );
};

export default NavBar;
