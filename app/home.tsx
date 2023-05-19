import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StatusBar } from "react-native";

import { api } from "../services/api";
import { Input } from "../components/Input";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleRegister() {
    const user = { name, email, password };

    try {
      await api.post("/users", user);

      router.push("/settings");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex flex-1 flex-col gap-10 px-10 bg-background justify-center">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Text className="text-title font-primary font-bold text-[45px]">
        Criar conta
      </Text>

      <View className="flex flex-col gap-2" style={{ gap: 20 }}>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          secureTextEntry
          value={password}
          placeholder="Senha"
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        className="p-3 flex items-center rounded-xl bg-details"
      >
        <Text className="text-title text-xl">Criar conta</Text>
      </TouchableOpacity>

      <Link className="text-details text-base" href="/login">
        <Text className="text-title">Já possui uma conta? </Text> Login
      </Link>
    </View>
  );
}
