import { Box, Flex, Heading, Image, Text } from "native-base";

import { Feather, FontAwesome5 } from "@expo/vector-icons";

interface Props {
  title: string;
  description: string;
  credits: number;
  id: number;
}

const SmallCard: React.FC<Props> = ({ title, credits, description, id }) => {
  return (
    <Box
      bg="muted.100"
      w={165}
      h={230}
      p={5}
      mb={10}
      borderRadius={10}
      justifyContent="space-between"
    >
      <Box h={120} borderRadius={10} overflow="hidden" mb={2}>
        <Image
          w="110%"
          h="110%"
          alt="image"
          source={require("../../assets/1.png")}
          resizeMode="cover"
        />
      </Box>
      <Heading size="sm" mb={1}>
        {title}
      </Heading>
      <Text mb={1}>{description}</Text>
      <Flex flexDir="row" justifyContent="space-between">
        <Box flexDir="row" alignItems="center">
          <Feather name="hexagon" size={18} color="#14b8a6" />
          <Text color="teal.600" fontWeight="bold" ml={1}>
            {credits}
          </Text>
        </Box>
        <FontAwesome5 name="mixer" size={17} color="black" />
      </Flex>
    </Box>
  );
};

export default SmallCard;
