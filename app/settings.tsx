import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SignOut } from "phosphor-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Input } from "../components/Input";
import { Interest } from "../components/Interest";

interface User {
  name: string;
  email: string;
}

export default function Settings() {
  const [user, setUser] = useState({} as User);
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([
    "Fábula",
    "Poesia",
    "Romance",
    "Crônica",
    "Biografia",
    "Geografia",
    "Conto infantil",
  ]);

  const router = useRouter();

  function addInterest() {
    if (!genres.includes(genre)) {
      setGenres([...genres, genre]);
    }
    setGenre("");
  }

  function removeInterest(item: string) {
    const newGenres = genres.filter((genre) => genre !== item);

    setGenres(newGenres);
  }

  function handleSignOut() {
    router.push("/login");
  }

  useEffect(() => {
    async function fetchUser() {
      const user = await AsyncStorage.getItem("user");
      setUser(user != null ? JSON.parse(user) : null);
    }

    fetchUser();
  }, []);

  return (
    <ScrollView>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <View className="flex flex-1 flex-col gap-10 px-10 py-14 bg-background justify-center">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-title font-primary font-bold text-2xl">
            Configurações de conta
          </Text>
          <TouchableOpacity onPress={handleSignOut}>
            <SignOut size={25} color="#FFFAE9" />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <View className="flex flex-col mb-6">
              <View>
                <Text className="text-title font-primary font-bold text-xl">
                  Informações pessoais
                </Text>
                <Text className="font-light text-base text-title/50">
                  Quisquam est quiquia tempora tempora. Adipisci labore numquam
                  adipisci.
                </Text>
              </View>

              <Image
                className="h-[100px] w-[100px] mt-4 rounded-full self-center"
                source={{
                  uri: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>

            <View className="flex mb-5 flex-col gap-5">
              <Input placeholder="Nome" value={user.name} />
              <Input placeholder="E-mail" value={user.email} />
            </View>
          </View>

          <View className="my-7">
            <Text className="text-title font-primary font-bold text-xl">
              Interesses
            </Text>
            <Text className="font-light text-base text-title/50">
              Quisquam est quiquia tempora tempora. Adipisci labore numquam
              adipisci.
            </Text>
          </View>

          <View className="flex flex-row flex-wrap">
            {genres.map((item) => (
              <Interest
                key={item}
                genre={item}
                removeInterest={() => removeInterest(item)}
              />
            ))}
          </View>

          <View className="flex gap-5 mt-6 items-center flex-col">
            <Input
              value={genre}
              placeholder="Adicione um novo interesse"
              onChangeText={setGenre}
            />

            <TouchableOpacity
              onPress={addInterest}
              className="p-3 flex items-center rounded-xl bg-details"
            >
              <Text className="text-title text-xl">Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
