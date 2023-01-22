import React, { FC } from "react";
import { View,Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

interface IPadding {
  children: React.ReactNode,
  style?: any
}

const Padding:FC <IPadding> = ({children, style}) => {
  const tw = useTailwind();

  return (<View style={{...tw('px-4'), ...style}}>
    {children}
  </View>)
}

export default Padding;