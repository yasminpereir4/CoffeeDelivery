import { Text, View } from "react-native";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

export const Home: React.FC = () => {
  return (
    <Layout>
      <View className="flex-1 justify-center items-center -mt-[100px]">
        <Card />
        <View className="p-4 self-start mt-6">
          <Text className="text-[#574F4D] font-subtitle text-xl">
            Nossos cafés
          </Text>
          <View className="flex-row items-center justify-center gap-3 mt-2">
            <View className="border-[#4B2995] border p-2 rounded-full">
              <Text className="uppercase font-title text-[#4B2995]">
                Tradicionais
              </Text>
            </View>
            <View className="border-[#4B2995] border p-2 rounded-full">
              <Text className="uppercase font-title text-[#4B2995]">Doces</Text>
            </View>
            <View className="border-[#4B2995] border p-2 rounded-full">
              <Text className="uppercase font-title text-[#4B2995]">
                Especiais
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};
