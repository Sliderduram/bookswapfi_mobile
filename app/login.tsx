import { useState } from "react";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, TouchableOpacity, StatusBar, Alert } from "react-native";

import db from "../db.json";
import { Input } from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin() {
    const user = db.users.filter((user) => {
      return user.email === email && user.password === password;
    })[0];

    if (!user) {
      return Alert.alert("E-mail ou senha incorretos!");
    }

    await AsyncStorage.setItem("user", JSON.stringify(user));

    router.push("/settings");
  }

  return (
    <View className="flex flex-1 flex-col gap-10 px-10 bg-background justify-center">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Text className="text-title font-primary font-bold text-[45px]">
        Login
      </Text>

      <View className="flex flex-col gap-2" style={{ gap: 20 }}>
        <Input value={email} placeholder="E-mail" onChangeText={setEmail} />
        <Input
          secureTextEntry
          value={password}
          placeholder="Senha"
          onChangeText={setPassword}
        />
      </View>

      <Text className="text-details underline text-base">
        Esqueci minha senha
      </Text>

      <TouchableOpacity
        onPress={handleLogin}
        className="p-3 flex items-center rounded-xl bg-details"
      >
        <Text className="text-title text-xl">Logar</Text>
      </TouchableOpacity>

      <Link className="text-details text-base" href="/home">
        <Text className="text-title">Não possui uma conta? </Text> Crie uma
        agora mesmo!
      </Link>
    </View>
  );
}
