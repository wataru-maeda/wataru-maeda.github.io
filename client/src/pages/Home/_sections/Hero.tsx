import {
  Box,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const socialLinksStatic = [
  {
    icon: TbBrandGithub,
    href: "https://github.com/wataru-maeda",
    label: "GitHub",
    external: true,
  },
  {
    icon: TbBrandLinkedin,
    href: "https://www.linkedin.com/in/wtr0716/",
    label: "LinkedIn",
    external: true,
  },
];

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const emailLink = {
    icon: TbMail,
    href: i18n.language === "ja" ? "mailto:w.maeda.jp@gmail.com" : "mailto:w.maeda.ca@gmail.com",
    label: "Email",
  };

  const socialLinks = [emailLink, ...socialLinksStatic];
  return (
    <Box
      bg="dark.card"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="dark.cardBorder"
      p={8}
      h="full"
      position="relative"
      overflow="hidden"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        borderColor: "primary.500",
        transform: "scale(1.02)",
        boxShadow:
          "0 20px 60px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.15), inset 0 0 100px rgba(59, 130, 246, 0.05)",
      }}
      css={(theme) => ({
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: theme.token("colors.effects.shimmerGradient"),
          transition: "left 0.6s ease",
        },
        "&:hover::before": {
          left: "100%",
        },
      })}
    >
      <Text
        fontFamily="mono"
        fontSize="xs"
        letterSpacing="wider"
        color="dark.textMuted"
        textTransform="uppercase"
        mb={4}
      >
        {t("hero.role")}
      </Text>

      <Heading
        as="h1"
        fontWeight="black"
        fontSize={{ base: "5xl", md: "7xl" }}
        lineHeight={0.9}
        letterSpacing="tighter"
        mb={6}
        color="dark.textPrimary"
      >
        WATARU
        <br />
        <Box as="span" color="primary.500">
          MAEDA
        </Box>
      </Heading>

      <Text fontSize="lg" color="dark.textMuted" mb={6} maxW="xl">
        {t("about.description")}
      </Text>

      <Flex gap={3} flexWrap="wrap">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <ChakraLink
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              display="flex"
              alignItems="center"
              justifyContent="center"
              w={12}
              h={12}
              bg="effects.iconBg"
              borderRadius="xl"
              color="primary.500"
              _hover={{
                bg: "primary.500",
                color: "dark.textPrimary",
                transform: "translateY(-2px) scale(1.1)",
                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              aria-label={link.label}
            >
              <Icon size={24} />
            </ChakraLink>
          );
        })}
      </Flex>
    </Box>
  );
}
