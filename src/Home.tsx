import { FlatList, ImageSourcePropType, Text, View } from "react-native";
import irlandes from "./assets/irlandes.png";
import latte from "./assets/latte.png";
import mocaccino from "./assets/mocaccino.png";
import { Card } from "./components/Card";
import { CoffeeOptions } from "./components/CoffeeOptions";
import { Layout } from "./components/Layout";

interface Card {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  price?: string;
  imageCoffee: ImageSourcePropType;
}

export const Home: React.FC = () => {
  const cards: Card[] = [
    {
      id: "1",
      title: "Tradicional",
      subtitle: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
      imageCoffee: latte,
    },
    {
      id: "2",
      title: "Doce",
      subtitle: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "9,90",
      imageCoffee: mocaccino,
    },
    {
      id: "3",
      title: "Especial",
      subtitle: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
      imageCoffee: irlandes,
    },
  ];

  return (
    <Layout>
      <View className="flex-1 justify-center items-center -mt-[100px]">
        <FlatList
          data={cards}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={card => card.id}
          ListEmptyComponent={() => (
            <View>
              <Text>Não foi localizado nenhuma loja perto de você! 😰</Text>
            </View>
          )}
          contentContainerStyle={{ paddingHorizontal: 100 }}
          ItemSeparatorComponent={() => <View className="mx-[15px] " />}
          renderItem={({ item, index }) => (
            <View className="items-center">
              <Card
                id={item.id}
                title={item.title}
                price={item.price}
                subtitle={item.subtitle}
                imageCoffee={item.imageCoffee}
                description={item.description}
              />
            </View>
          )}
        />

        <View className="p-4 self-start">
          <Text className="text-[#574F4D] font-subtitle text-xl">
            Nossos cafés
          </Text>
          <View className="flex-row items-center justify-center mt-2">
            <CoffeeOptions text="Tradicionais" />
            <CoffeeOptions text="Doces" />
            <CoffeeOptions text="Especiais" />
          </View>
        </View>
      </View>
    </Layout>
  );
};
