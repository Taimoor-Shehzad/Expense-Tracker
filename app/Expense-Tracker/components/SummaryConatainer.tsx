import { View, Text } from "react-native";
import React from "react";
import createHomeStyles from "@/assets/styles/home.styles";

type Summary = {
  balance: number;
  income: number;
  expenses: number;
};

type SummaryContainerProps = {
  summary: Summary;
  styles: ReturnType<typeof createHomeStyles>;
};

const SummaryConatainer = ({
  summary,
  styles,
}: SummaryContainerProps) => {
  return (
    <View style={styles.summaryContainer}>
      <View style={styles.totalBalanceContainer}>
        <Text style={styles.totalText}>Total Balance</Text>
        <Text style={styles.balanceText}>${summary.balance.toFixed(2)}</Text>
      </View>
      <View style={styles.incomeExpenseContainer}>
        <View style={styles.incomeContainer}>
          <Text style={styles.incomeText}>Income</Text>
          <Text style={styles.incomeNumber}>+${summary.income.toFixed(2)}</Text>
        </View>
        <View style={styles.expensesContainer}>
          <Text style={styles.expenseText}>Expenses</Text>
          <Text style={styles.expenseNumber}>
            -${Math.abs(summary.expenses).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryConatainer;
