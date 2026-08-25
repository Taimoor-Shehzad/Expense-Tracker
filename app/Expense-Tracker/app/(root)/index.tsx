import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/expo";
import React from "react";
import { Button } from "@react-navigation/elements";

const Index = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>You MADE IT!!!!🥳🥳</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#007AFF", padding: 16, borderRadius: 8 }}
        onPress={() => signOut()}
      >
        <Text>Sign Out?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
