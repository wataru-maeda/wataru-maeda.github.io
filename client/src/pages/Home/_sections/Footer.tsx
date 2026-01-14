import { Text } from "@chakra-ui/react";

export default function FooterSection() {
  return (
    <Text fontSize="sm" color="fg.muted" textAlign="center" py={6}>
      © {new Date().getFullYear()} Wataru Maeda. All rights reserved.
    </Text>
  );
}
