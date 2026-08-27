import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { useAuth, useUser } from "@clerk/expo";
import React, { useEffect } from "react";
import { Button } from "@react-navigation/elements";
import { useTransactions } from "@/hooks/useTransaction";
import createHomeStyles from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  const { user } = useUser();
  const styles = createHomeStyles();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.logoImg}
              source={require("@/assets/images/logo.png")}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              {/* <Text>{user?.emailAddresses[0]?.emailAddress.split("@")[0]}</Text> */}
              <Text style={styles.usernameText}>Taimoor Ahmed</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Pressable style={styles.addButton}>
              <Ionicons name="add" size={18} color={"#fff"} />
              <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
            </Pressable>
            <Pressable style={styles.exitButton}>
              <Ionicons name="exit-outline" size={19} color={"#000"} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
