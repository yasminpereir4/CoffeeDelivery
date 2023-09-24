import { Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View className="flex-1 bg-[#fff]">
      <View className="bg-[#272221] flex-1 justify-center items-center">
        <View className="flex-row p-4 w-full justify-between">
          <View className="flex-row items-center gap-2 text-base">
            <Fontisto name="map-marker-alt" size={24} color="#8047F8" />
            <Text className="text-white">São Paulo, SP</Text>
          </View>
          <View className="">
            <FontAwesome5 name="shopping-cart" size={24} color="#C47F17" />
          </View>
        </View>
        <Text className="text-white font-bold text-xl p-4 font-['sans']">
          Encontre o café perfeito para qualquer hora do dia
        </Text>
        <View className="w-full p-4 relative">
          <TextInput
            className="bg-[#403937] p-4 rounded"
            placeholder="Pesquisar"
            placeholderTextColor="#9ca3af"
            keyboardType="ascii-capable"
          />
          <TouchableOpacity className="absolute right-8 top-8">
            <Feather
              name="search"
              size={24}
              color="#9ca3af"
              className="object-contain"
            />
          </TouchableOpacity>
          <Image className="self-end" source={require("../assets/image.png")} />
        </View>
      </View>
      <View className="flex-1">{children}</View>
    </View>
  );
};
