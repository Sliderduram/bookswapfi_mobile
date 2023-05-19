import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      placeholderTextColor="#787CE0"
      className="text-title text-base w-full border border-details p-2 rounded-lg"
    />
  );
}
