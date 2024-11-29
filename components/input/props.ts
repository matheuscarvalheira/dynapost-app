import { TextInputProps } from "react-native";
import { ImageSourcePropType } from "react-native";

export interface InputProps extends TextInputProps {
  placeholder: string;
  icon?: ImageSourcePropType;
  value: string;
  onChangeText: (text: string) => void;
}