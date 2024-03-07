import { Box, Button, Container, Flex, Heading, Text, VStack, Image, Stack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaLock, FaChartLine } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={useColorModeValue("gray.50", "gray.800")}>
        <Icon as={icon} w={5} h={5} color={"blue.500"} />
      </Flex>
      <VStack align={"start"}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
      </VStack>
    </Stack>
  );
};

const Index = () => {
  return (
    <Box minH="100vh" py={12} px={[null, null, 6, null, 8]}>
      <Container maxW="container.xl">
        <Flex align="center" justify="center" direction={{ base: "column", md: "row" }}>
          <VStack flex={1} spacing={5} w="full" align="left">
            <Heading as="h1" size="2xl">
              The Ultimate Solution for Your Business
            </Heading>
            <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
              Manage your business with ease and efficiency with our innovative software.
            </Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg" mt={3} px={6} py={3}>
              Get Started
            </Button>
            <Flex wrap="wrap" spacing={10} mt={12}>
              <Feature icon={FaCloud} title="Cloud-Based" text="Access your data from anywhere in the world." />
              <Feature icon={FaLock} title="Secure" text="Your data is protected with industry-leading security measures." />
              <Feature icon={FaChartLine} title="Scalable" text="Our software grows with your business." />
            </Flex>
          </VStack>
          <Box flex={1} mt={[10, null, 0]} ml={[null, null, 10, null, 20]}>
            <Image src="https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHNhYXN8ZW58MHx8fHwxNzA5ODE3Mzg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Software" rounded="lg" shadow="2xl" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
