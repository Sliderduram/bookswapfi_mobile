import { Text, View } from "react-native";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <>
      {!isReady && <SplashScreen />}

      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="light" backgroundColor="transparent" translucent />
      </View>
    </>
  );
}
