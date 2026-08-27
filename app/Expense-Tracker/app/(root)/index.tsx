import { View, Text, TouchableOpacity } from "react-native";
import { useAuth, useUser } from "@clerk/expo";
import React, { useEffect } from "react";
import { Button } from "@react-navigation/elements";
import { useTransactions } from "@/hooks/useTransaction";

const Index = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id);
  useEffect(() => {
    loadData();
  }, [loadData]);
  console.log(transactions);

  console.log(user?.id);
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
