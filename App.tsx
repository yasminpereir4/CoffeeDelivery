import { Baloo2_700Bold, useFonts } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/Home";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
