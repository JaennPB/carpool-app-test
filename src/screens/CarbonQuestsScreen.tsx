import { Box, FlatList, Flex, HStack, Text } from "native-base";
import { ListRenderItemInfo } from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import CardComp from "../components/CardComp";

type DataObj = {
  title: string;
  description: string;
  credits: number;
  timer: string;
};

const DUMMY_DATA: DataObj[] = [
  {
    title: "Carpool to save 100kg in CO2 Emissions",
    description: "Share in 3000 Carbon credits set aside for this goal.",
    credits: 3000,
    timer: "09:43:01",
  },
  {
    title: "Complete 100 Eco Friendly Carpools",
    description: "Share in 3000 Carbon credits set aside for this goal.",
    credits: 3000,
    timer: "09:43:01",
  },
  {
    title: "Complete 150 Eco Friendly Carpools",
    description: "Share in 3500 Carbon credits set aside for this goal.",
    credits: 3500,
    timer: "09:43:01",
  },
];

const CarbonQuestsScreen: React.FC = () => {
  function renderItemHandler(itemData: ListRenderItemInfo<DataObj>) {
    const item = itemData.item;

    return (
      <CardComp
        title={item.title}
        description={item.description}
        timer={item.timer}
        credits={item.credits}
      />
    );
  }

  return (
    <Flex flex={1} bg="white" p={5}>
      <Box alignItems="center" mb={10}>
        <MaterialCommunityIcons
          name="gamepad-square"
          size={70}
          color="#14b8a6"
        />
        <Text fontFamily="Poppins_400Regular">
          Complete quests for more Carbon Credits
        </Text>
      </Box>
      <HStack
        bg="muted.100"
        borderRadius={10}
        p={5}
        space={2}
        mb={10}
        alignItems="center"
      >
        <Box
          bg="teal.500"
          alignItems="center"
          justifyContent="center"
          h={41}
          w={41}
          borderRadius={50}
        >
          <Feather name="hexagon" size={30} color="white" />
        </Box>
        <Flex justify="center">
          <Text fontFamily="Poppins_600SemiBold">
            Invite 5 friends and earn 30 Carbon Credits
          </Text>
          <Text fontFamily="Poppins_400Regular">
            Do you love our mission? Let your friends
          </Text>
          <Text fontFamily="Poppins_400Regular">
            know about the carbon games.
          </Text>
        </Flex>
      </HStack>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItemHandler}
        showsVerticalScrollIndicator={false}
      />
    </Flex>
  );
};

export default CarbonQuestsScreen;
