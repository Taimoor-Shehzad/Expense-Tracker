import { View, Text } from "react-native";
import React from "react";
import createHomeStyles from "@/assets/styles/home.styles";
import type { Transaction } from "@/hooks/useTransaction";

type TransactionItemProps = {
  transaction: Transaction;
  deleteTransaction: (id: number) => void;
  styles: ReturnType<typeof createHomeStyles>;
};

const TransactionItem = ({
  transaction,
  deleteTransaction,
  styles,
}: TransactionItemProps) => {
  return (
    <View style={styles.itemCard}>
      <Text>Hello</Text>
    </View>
  );
};

export default TransactionItem;
