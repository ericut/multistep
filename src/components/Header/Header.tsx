// theme + styles
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box w="100%" h="120px" bgGradient="linear(to-tr, blue.700, blue.900)" boxShadow="lg" zIndex="10" px="10px">
      <Flex alignItems="center" justifyContent="space-between" h="100%" px={{ lg: '12.5%', md: '5%', sm: '5%' }}>
        <Heading size="lg" color="white">MultiStep Form Example</Heading>
      </Flex>
    </Box>
  );
}
