import React, { FC } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import Avatar from "../../ui/Avatar";
import Padding from "../../ui/Padding";
import { useNavigation } from "@react-navigation/native";
import {Entypo} from '@expo/vector-icons';
import { useProfile } from "../../../hooks/useProfile";

const Header: FC= () => {
  const tw = useTailwind();
  const {isLoading, name} = useProfile();
  const {navigate} = useNavigation();
  return (
  <Padding style={tw('flex-row items-center')}>
    <Avatar name="Pavel"/>
    <TouchableOpacity style={tw('flex-row items-end')} onPress={() => navigate('Profile')}>
    <Text style={tw('text-2xl text-gray-800 font-bold')}>Pavel</Text>
    <Entypo name='chevron-small-right' size={28} style={tw('text-gray-800')}/>
    </TouchableOpacity>
  </Padding>)
}

export default Header;