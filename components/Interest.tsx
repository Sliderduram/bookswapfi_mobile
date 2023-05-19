import { X } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";

interface InterestProps {
  genre: string;
  removeInterest?: () => void;
}

export function Interest({ genre, removeInterest }: InterestProps) {
  return (
    <View className="flex flex-row p-3 mr-2 my-1 rounded font-secondary bg-backgroundLight font-light">
      <Text className="text-title/50 mr-2">{genre}</Text>

      <TouchableOpacity
        onPress={removeInterest}
        className="flex flex-row items-center"
      >
        <X size={15} color="#818185" />
      </TouchableOpacity>
    </View>
  );
}
