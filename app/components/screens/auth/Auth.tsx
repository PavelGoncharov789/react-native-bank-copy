import React, { FC } from "react";
import { View,Text } from "react-native";
import {useTailwind} from 'tailwind-rn';
import { styleCenter } from "../../layout/Layout";

const Auth: FC = () => {
  const tw = useTailwind();

  return <View style={tw(styleCenter)}>
    <View style={tw('mx-5 justify-center items-center h-full')}>
      <View style={tw('w-9/12')}>
      <Text>Auth</Text>
      </View>
    </View>
  </View>
}

export default Auth;