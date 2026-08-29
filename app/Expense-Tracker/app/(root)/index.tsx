import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useAuth, useUser } from "@clerk/expo";
import React, { useEffect, useState } from "react";
import { useTransactions } from "@/hooks/useTransaction";
import createHomeStyles from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import SummaryConatainer from "@/components/SummaryConatainer";
import TransactionItem from "@/components/TransactionItem";
import { router } from "expo-router";

const Index = () => {
  const { user, isLoaded } = useUser();
  const styles = createHomeStyles();
  const { signOut } = useAuth();
  const { summary, loadData, transactions, deleteTransaction } =
    useTransactions(user?.id);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadData();
    setIsRefreshing(false);
  };

  if (!isLoaded && !isRefreshing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
            <Pressable
              style={styles.addButton}
              onPress={() => router.navigate("/Create")}
            >
              <Ionicons name="add" size={18} color={"#fff"} />
              <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
            </Pressable>
            <Pressable style={styles.exitButton} onPress={() => signOut()}>
              <Ionicons name="exit-outline" size={19} color={"#000"} />
            </Pressable>
          </View>
        </View>

        <SummaryConatainer styles={styles} summary={summary} />

        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <TransactionItem
              transaction={item}
              deleteTransaction={deleteTransaction}
              styles={styles}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>No transactions yet</Text>
              <Text style={styles.emptyStateText}>
                Add a transaction to see it here.
              </Text>
            </View>
          }
          style={styles.transactionsList}
          contentContainerStyle={styles.transactionsListContent}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      </View>
    </View>
  );
};

export default Index;
