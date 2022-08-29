import { Box, Flex, Image, Text } from "native-base";

import { Feather } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  description: string;
  credits: number;
  timer: string;
}

const CardComp: React.FC<Props> = ({ title, credits, description, timer }) => {
  return (
    <Flex
      bg="muted.700"
      mb={8}
      borderRadius={15}
      p={5}
      h={300}
      justify="space-between"
      overflow="hidden"
    >
      <Image
        alt="image"
        source={require("../../assets/CardImage.jpg")}
        position="absolute"
        h={300}
        opacity={0.2}
      />
      <Flex flexDir="row" justify="space-between">
        <Box
          bg="teal.500"
          px={3}
          py={1}
          borderRadius={50}
          flexDir="row"
          alignItems="center"
        >
          <Feather name="hexagon" size={12} color="white" />
          <Text color="white" ml={1}>
            {credits}
          </Text>
        </Box>
        <Box
          bg="red.500"
          px={3}
          py={1}
          borderRadius={50}
          flexDir="row"
          alignItems="center"
        >
          <MaterialCommunityIcons
            name="timer-outline"
            size={13}
            color="white"
          />
          <Text color="white" ml={1}>
            {timer}
          </Text>
        </Box>
      </Flex>
      <Flex mt={12}>
        <Text fontWeight="semibold" color="white" fontSize={18}>
          {title}
        </Text>
        <Text color="white" fontSize={13}>
          {description}
        </Text>
      </Flex>
      <Flex flexDir="row" justify="space-between">
        <Box>
          <Text color="white">Goal</Text>
          <Text color="white">Save 100kg CO2</Text>
          <Box bg="muted.400" w={100} h={3} borderRadius={20} mt={2}>
            <Box bg="teal.500" w="45%" h={3} borderRadius={20} />
          </Box>
        </Box>
        <Box>
          <Text color="white">Participating</Text>
          <Flex flexDir="row" position="relative">
            <Box
              bg="muted.100"
              h={10}
              w={10}
              borderRadius={50}
              mt={1}
              position="absolute"
              shadow={2}
              right={0}
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize={11}>1.2K</Text>
            </Box>
            <Box
              bg="muted.100"
              h={10}
              w={10}
              borderRadius={50}
              mt={1}
              position="absolute"
              shadow={2}
              right={8}
            />
            <Box
              bg="muted.100"
              h={10}
              w={10}
              borderRadius={50}
              mt={1}
              position="absolute"
              shadow={2}
              right={16}
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardComp;
