import { Box, Button, Flex, Text } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useAppNavigation } from "../hooks/navHooks";
import BlockchainGoodsNestedScreen from "./nested/BlockchainGoodsNestedScreen";
import PhysicalGoodsNestedScreen from "./nested/PhysicalGoodsNestedScreen";

const NestedStack = createNativeStackNavigator<NavParams>();

const CarbonMarketplaceScreen: React.FC = () => {
  const navigation = useAppNavigation();

  const [activeScreen, setActiveScreen] = useState("1");

  function navigateToNestedScreenHandler(id: string) {
    if (id === "1") {
      navigation.navigate("PhysicalGoodsNestedScreen");
      setActiveScreen("1");
    }

    if (id === "2") {
      navigation.navigate("BlockchainGoodsNestedScreen");
      setActiveScreen("2");
    }
  }

  return (
    <Flex flex={1} bg="white" p={5}>
      <Box alignItems="center" mb={10}>
        <FontAwesome5 name="shopping-bag" size={60} color="#14b8a6" />
        <Text mt={5}>Complete quests for more Carbon Credits</Text>
      </Box>
      <Box flexDir="row" bg="muted.100" mb={10} borderRadius={10}>
        <Button
          bg={activeScreen === "1" ? "black" : "muted.100"}
          _text={{ color: activeScreen === "1" ? "white" : "muted.400" }}
          borderRadius={10}
          onPress={navigateToNestedScreenHandler.bind(this, "1")}
          colorScheme="black"
        >
          Physical Goods
        </Button>
        <Button bg="muted.100" _text={{ color: "muted.400" }} borderRadius={10}>
          Digital Goods
        </Button>
        <Button
          bg={activeScreen === "2" ? "black" : "muted.100"}
          _text={{ color: activeScreen === "2" ? "white" : "muted.400" }}
          borderRadius={10}
          onPress={navigateToNestedScreenHandler.bind(this, "2")}
          colorScheme="black"
        >
          Blockchain goods
        </Button>
      </Box>
      <NestedStack.Navigator screenOptions={{ headerShown: false }}>
        <NestedStack.Screen
          name="PhysicalGoodsNestedScreen"
          component={PhysicalGoodsNestedScreen}
        />
        <NestedStack.Screen
          name="BlockchainGoodsNestedScreen"
          component={BlockchainGoodsNestedScreen}
        />
      </NestedStack.Navigator>
    </Flex>
  );
};

export default CarbonMarketplaceScreen;
