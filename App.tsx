import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box, Heading, HStack, NativeBaseProvider } from "native-base";

import CarbonMarketplaceScreen from "./src/screens/CarbonMarketplaceScreen";
import CarbonQuestsScreen from "./src/screens/CarbonQuestsScreen";

import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator<NavParams>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShadowVisible: false,
              headerTitle: "",
            }}
            initialRouteName="CarbonMarketplaceScreen"
          >
            <Stack.Screen
              name="CarbonQuestsScreen"
              component={CarbonQuestsScreen}
              options={{
                headerLeft: () => {
                  return (
                    <HStack alignItems="center" space={3}>
                      <Box
                        bg="muted.100"
                        p={2}
                        borderRadius={50}
                        h={10}
                        w={10}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Entypo
                          name="chevron-thin-left"
                          size={20}
                          color="#bcbcbc"
                        />
                      </Box>
                      <Heading fontSize={20} fontFamily="Poppins_600SemiBold">
                        Carbon Quests
                      </Heading>
                    </HStack>
                  );
                },
              }}
            />
            <Stack.Screen
              name="CarbonMarketplaceScreen"
              component={CarbonMarketplaceScreen}
              options={{
                headerTitle: "",
                headerLeft: () => {
                  return (
                    <HStack alignItems="center" space={3}>
                      <Box
                        bg="muted.100"
                        p={2}
                        borderRadius={50}
                        h={10}
                        w={10}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Entypo
                          name="chevron-thin-left"
                          size={20}
                          color="#bcbcbc"
                        />
                      </Box>
                      <Heading fontSize={20} fontFamily="Poppins_600SemiBold">
                        Carbon Marketplace
                      </Heading>
                    </HStack>
                  );
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
