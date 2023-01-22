import React, { FC } from "react";
import { View, Text, ActivityIndicator, TextInput } from "react-native";
import {useTailwind} from 'tailwind-rn';

interface IField {
  onChange: (value: string) => void;
  val: string;
  palaceholder: string;
  isSequre?: boolean;
}

const Field: FC<IField> = ({ onChange, val, palaceholder, isSequre }) => {
  const tw = useTailwind();
  return (
    <TextInput
      placeholder={palaceholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSequre}
      autoCapitalize="none"
      // showSoftInputOnFocus={false}
      style={tw('rounded-xl bg-gray-100 mt-3  p-3 w-full')}
    />
  );
};

export default Field;
