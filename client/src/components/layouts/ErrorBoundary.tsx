import { Box, Flex, Heading, Button, Code } from "@chakra-ui/react";
import { TbAlertTriangle, TbRefresh } from "react-icons/tb";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          p={8}
          bg="bg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            w="full"
            maxW="2xl"
            p={8}
          >
            <Box mb={6} flexShrink={0}>
              <TbAlertTriangle size={48} color="var(--destructive)" />
            </Box>

            <Heading as="h2" fontSize="xl" mb={4}>
              An unexpected error occurred.
            </Heading>

            <Box
              p={4}
              w="full"
              borderRadius="md"
              bg="bg.muted"
              overflowX="auto"
              mb={6}
            >
              <Code
                as="pre"
                fontSize="sm"
                color="fg.muted"
                whiteSpace="break-spaces"
                bg="transparent"
              >
                {this.state.error?.stack}
              </Code>
            </Box>

            <Button
              onClick={() => window.location.reload()}
              display="flex"
              alignItems="center"
              gap={2}
              px={4}
              py={2}
              borderRadius="lg"
              bg="primary"
              color="white"
              css={{
                '&:hover': {
                  opacity: 0.9
                }
              }}
            >
              <TbRefresh size={16} />
              Reload Page
            </Button>
          </Flex>
        </Flex>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
