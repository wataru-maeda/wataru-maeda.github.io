import { Box, Grid, GridItem } from "@chakra-ui/react";
import { LanguageSwitch } from "@/components/layouts/LanguageSwitch";
import Hero from "./_sections/Hero";
import Stats from "./_sections/Stats";
import Expertise from "./_sections/Expertise";
import Philosophy from "./_sections/Philosophy";
import Footer from "./_sections/Footer";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="dark.bg"
      color="dark.textPrimary"
      fontFamily="sans"
      px={{ base: 4, md: 6, lg: 8 }}
      py={8}
    >
      <LanguageSwitch />

      <Box maxW="8xl" mx="auto">
        {/* Hero + Stats Bento Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4} mb={4}>
          <GridItem>
            <Hero />
          </GridItem>
          <GridItem>
            <Stats />
          </GridItem>
        </Grid>

        {/* Expertise Bento Grid */}
        <Expertise />

        {/* Philosophy Bento Grid */}
        <Philosophy />

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}
