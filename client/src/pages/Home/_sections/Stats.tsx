import { Box, Flex, Text } from "@chakra-ui/react";
import { TbUsers, TbBriefcase, TbStack } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { HoverCard } from "@/components/elements";

const statIcons = [TbUsers, TbBriefcase, TbStack];

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <Flex direction="column" gap={4} h="full">
      {stats.map((stat, index) => {
        const Icon = statIcons[index];
        return (
          <HoverCard key={index} flex={1} p={6}>
            <Flex alignItems="center" gap={4}>
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
              <Box>
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  lineHeight="1"
                  mb={1}
                  color="dark.textPrimary"
                >
                  {stat.value}
                </Text>
                <Text
                  fontSize="xs"
                  color="dark.textMuted"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {stat.label}
                </Text>
              </Box>
            </Flex>
          </HoverCard>
        );
      })}
    </Flex>
  );
}
