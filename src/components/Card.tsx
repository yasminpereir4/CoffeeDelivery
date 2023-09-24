import { Image, Text, View } from "react-native";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
}

export const Card: React.FC<CardProps> = ({
  description,
  price,
  subtitle,
  title,
}) => {
  return (
    <View className="bg-[#F3F2F2] border border-[#EDEDED] w-[200px] h-auto rounded rounded-tl-3xl rounded-br-3xl">
      <View className="justify-center items-center w-full">
        <Image className="" source={require("../assets/latte.png")} />
        <View className="p-6 justify-center items-center gap-2">
          <View className="bg-[#EBE5F9] p-2 rounded-full">
            <Text className="uppercase font-semibold text-[#4B2995]">
              Tradicional
            </Text>
          </View>

          <Text className="text-[#403937] font-bold text-xl">Latte</Text>
          <Text className="text-[#8D8686] font-semibold text-base">
            Café expresso com o dobro de leite e espuma cremosa
          </Text>
          <Text className="text-[#C47F17] font-bold text-xl">R$ 9,90</Text>
        </View>
        {/* <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text> */}
      </View>
    </View>
  );
};
