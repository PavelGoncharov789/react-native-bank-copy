import React, { FC } from "react";
import { View,Text, ActivityIndicator } from "react-native";

const Loader: FC= () => {
  return <ActivityIndicator size='large' color='#3b82f6' />
}

export default Loader;