import { View, Text, Pressable } from "react-native";
import React, { ComponentProps } from "react";
import createHomeStyles from "@/assets/styles/home.styles";
import type { Transaction } from "@/hooks/useTransaction";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { formatDate } from "@/utils/formatDate";

const CATEGORY_ICONS: Record<string, IconName> = {
  "Food & Drinks": "fast-food",
  Shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Income: "cash",
  Other: "ellipsis-horizontal",
};

type TransactionItemProps = {
  transaction: Transaction;
  deleteTransaction: (id: number) => void;
  styles: ReturnType<typeof createHomeStyles>;
};

type IconName = ComponentProps<typeof Ionicons>["name"];

const TransactionItem = ({
  transaction,
  deleteTransaction,
  styles,
}: TransactionItemProps) => {
  const icon: IconName =
    CATEGORY_ICONS[transaction.category] || "pricetag-outline";

  const isIncome = Number(transaction.amount) > 0;

  return (
    <View style={styles.itemCard}>
      <View style={styles.itemCardLeft}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={20}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionTextContainer}>
          <Text style={styles.transactionTitleText}>{transaction.title}</Text>
          <Text style={styles.transactionCategoryText}>
            {transaction.category}
          </Text>
        </View>
      </View>
      <View style={styles.itemCardRight}>
        <View style={styles.transactionAmountText}>
          <Text
            style={[
              styles.transactionAmount,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {isIncome ? "+$" : "-$"}
            {Math.abs(Number(transaction.amount)).toFixed(2)}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(transaction.created_at)}
          </Text>
        </View>
        <Pressable
          style={styles.transactionDeleteIconContainer}
          onPress={() => deleteTransaction(transaction.id)}
        >
          <Ionicons name="trash" size={18} color={COLORS.expense} />
        </Pressable>
      </View>
    </View>
  );
};

export default TransactionItem;
