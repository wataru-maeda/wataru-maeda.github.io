import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { TbAlertCircle, TbHome } from "react-icons/tb";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <Flex
      minH="100vh"
      w="full"
      alignItems="center"
      justifyContent="center"
      bg="dark.bg"
      px={4}
    >
      <Box
        maxW="lg"
        w="full"
        bg="dark.card"
        borderRadius="2xl"
        borderWidth="1px"
        borderColor="dark.cardBorder"
        p={8}
        textAlign="center"
      >
        <Flex justifyContent="center" mb={6}>
          <Box
            w={16}
            h={16}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="effects.redIconBg"
            borderRadius="full"
            color="red.500"
          >
            <TbAlertCircle size={40} />
          </Box>
        </Flex>

        <Heading
          as="h1"
          fontSize="6xl"
          fontWeight="black"
          color="dark.textPrimary"
          mb={6}
          letterSpacing="tight"
        >
          404
        </Heading>

        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="bold"
          color="dark.textPrimary"
          mb={4}
        >
          Page Not Found
        </Heading>

        <Text color="dark.textMuted" mb={8} lineHeight="relaxed">
          Sorry, the page you are looking for doesn't exist.
          <br />
          It may have been moved or deleted.
        </Text>

        <Button
          onClick={handleGoHome}
          bg="primary.500"
          color="dark.textPrimary"
          px={6}
          py={6}
          borderRadius="xl"
          fontWeight="semibold"
          _hover={{
            bg: "primary.600",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Flex alignItems="center" gap={2}>
            <TbHome size={20} />
            Go Home
          </Flex>
        </Button>
      </Box>
    </Flex>
  );
}
