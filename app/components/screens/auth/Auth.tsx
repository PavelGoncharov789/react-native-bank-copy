import React, { FC, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "../../../hooks/useAuth";
import { styleCenter } from "../../layout/Layout";
import Button from "../../ui/Button";
import Field from "../../ui/Field";
import Loader from "../../ui/Loader";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();
  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);
  const tw = useTailwind();

  const authHandler = async() => {
    const {email, password} = data;
    if(isReg) await register(email, password);
    else await login(email, password);
    setData({} as IData);
  }

  return (
    <View style={tw(styleCenter)}>
      <View style={tw("mx-5 justify-center items-center h-full")}>
        <View style={tw("w-9/12")}>
          <Text style={tw("text-center text-gray-800 text-2xl font-bold mb-2")}>
            {isReg ? "Sign up" : "Sign in"}
          </Text>
          {isLoading ? <Loader /> : <></>}

          <Field
            val={data.email}
            palaceholder="Enter email"
            onChange={(val) => setData({ ...data, email: val })}
          />
          <Field
            val={data.password}
            palaceholder="Enter password"
            onChange={(val) => setData({ ...data, password: val })}
            isSequre={true}
          />

          <Button onPress={authHandler} title="Let's go"/>
          <Pressable onPress={() => setIsReg(!isReg)}>
            <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>
       {isReg?"Login": "Register"}     
            </Text>

          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Auth;
