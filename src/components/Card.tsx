import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CardProps {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  price?: string;
  imageCoffee: ImageSourcePropType;
}

export const Card: React.FC<CardProps> = ({
  id,
  description,
  price,
  subtitle,
  title,
  imageCoffee,
}) => {
  const { navigate } = useNavigation();
  return (
    <View className="bg-[#F3F2F2] border border-[#EDEDED] w-[200px] h-auto rounded-lg rounded-tr-3xl mt-10 rounded-bl-3xl">
      <View className="justify-center items-center w-full">
        <Image className="-mt-10" source={imageCoffee} />
        <View className="p-6 justify-center items-center gap-2">
          <TouchableOpacity className="bg-[#EBE5F9] p-2 rounded-full">
            <Text className="uppercase font-title text-[#4B2995]">{title}</Text>
          </TouchableOpacity>

          <Text className="text-[#403937] text-xl font-subtitle">
            {subtitle}
          </Text>
          <Text className="text-[#8D8686] font-alt text-base">
            {description}
          </Text>
          <Text className="text-[#C47F17] font-bold text-xl">R${price}</Text>
        </View>
        {/* <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text> */}
      </View>
    </View>
  );
};
