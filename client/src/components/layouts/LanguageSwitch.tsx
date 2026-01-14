import { Flex, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <Flex
      className={cn(className)}
      position="fixed"
      top={6}
      right={6}
      zIndex={50}
      alignItems="center"
      gap={2}
      bg="rgba(255, 255, 255, 0.8)"
      backdropFilter="blur(8px)"
      p={1}
      borderRadius="full"
      border="1px solid"
      borderColor="border"
      boxShadow="sm"
    >
      <Button
        onClick={() => changeLanguage("en")}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        fontWeight="bold"
        transition="all 0.3s"
        bg={currentLanguage === "en" ? "primary" : "transparent"}
        color={currentLanguage === "en" ? "white" : "fg.muted"}
        boxShadow={currentLanguage === "en" ? "sm" : "none"}
        css={{
          "&:hover": {
            color: currentLanguage === "en" ? "white" : "var(--foreground)",
          },
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => changeLanguage("ja")}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        fontWeight="bold"
        transition="all 0.3s"
        bg={currentLanguage === "ja" ? "primary" : "transparent"}
        color={currentLanguage === "ja" ? "white" : "fg.muted"}
        boxShadow={currentLanguage === "ja" ? "sm" : "none"}
        css={{
          "&:hover": {
            color: currentLanguage === "ja" ? "white" : "var(--foreground)",
          },
        }}
      >
        JP
      </Button>
    </Flex>
  );
}
