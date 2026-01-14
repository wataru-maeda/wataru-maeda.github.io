import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HoverCardProps extends BoxProps {
  children: ReactNode;
  enableHover?: boolean;
}

export default function HoverCard({
  children,
  enableHover = true,
  ...props
}: HoverCardProps) {
  return (
    <Box
      bg="dark.card"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="dark.cardBorder"
      transition="all 0.3s ease"
      cursor={enableHover ? "pointer" : "default"}
      _hover={
        enableHover
          ? {
              borderColor: "primary.500",
              transform: "translateY(-4px)",
              boxShadow:
                "0 8px 30px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.2)",
            }
          : undefined
      }
      css={
        enableHover
          ? {
              "&:hover": {
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.05) 80%, #0a0a0a 100%)",
              },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </Box>
  );
}
