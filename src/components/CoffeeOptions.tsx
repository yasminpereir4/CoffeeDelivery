import { Text, TouchableOpacity, View } from "react-native";

interface CoffeeOptionsProps {
  id: string;
  text: string;
}

export const CoffeeOptions: React.FC<CoffeeOptionsProps> = ({ text }) => {
  return (
    <View className="pl-1">
      <TouchableOpacity className="border-[#4B2995] border p-2 rounded-full">
        <Text className="uppercase font-title text-[#4B2995]">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
