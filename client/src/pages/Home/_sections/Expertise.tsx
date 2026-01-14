import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { TbDeviceMobile, TbServer, TbSparkles, TbRocket } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { HoverCard } from "@/components/elements";

const expertiseIcons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

const serviceTech = [
  ["React", "Next.js", "Vite", "React Native", "Expo", "Swift", "Kotlin"],
  ["Node.js", "NestJS", "GraphQL", "REST API", "AWS", "GCP", "Terraform"],
  ["OpenAI", "Anthropic", "LangChain", "Ollama", "AWS", "GCP"],
  ["n8n", "GitHub Actions", "Terraform", "AWS", "GCP"],
];

export default function ExpertiseSection() {
  const { t } = useTranslation();
  const expertiseItems = t("works.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      mb={4}
    >
      {expertiseItems.map((item, index) => {
        const Icon = expertiseIcons[index];
        const tech = serviceTech[index];
        return (
          <GridItem key={index}>
            <HoverCard p={6} h="full">
              <Flex alignItems="center" gap={3} mb={4}>
                <Box
                  w={12}
                  h={12}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="effects.iconBg"
                  borderRadius="xl"
                  flexShrink={0}
                  color="primary.500"
                >
                  <Icon size={24} />
                </Box>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontWeight="bold"
                  color="dark.textPrimary"
                >
                  {item.title}
                </Heading>
              </Flex>
              <Text
                fontSize="sm"
                color="dark.textMuted"
                mb={4}
                lineHeight="relaxed"
              >
                {item.description}
              </Text>
              <Flex flexWrap="wrap" gap={2}>
                {tech.map((t, i) => (
                  <Box
                    key={i}
                    as="span"
                    bg="dark.badgeBg"
                    color="dark.textMuted"
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontFamily="mono"
                    borderRadius="md"
                    display="inline-block"
                  >
                    {t}
                  </Box>
                ))}
              </Flex>
            </HoverCard>
          </GridItem>
        );
      })}
    </Grid>
  );
}
