import {
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { ComponentProps, useState } from "react";
import { API_URL } from "@/constants/api";
import { useUser } from "@clerk/expo";
import { router } from "expo-router";
import createCreateStyles from "@/assets/styles/create.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

const Create = () => {
  const { user } = useUser();
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const styles = createCreateStyles();

  interface Category {
    id: string;
    name: string;
    icon: ComponentProps<typeof Ionicons>["name"];
  }

  const CATEGORIES: Category[] = [
    { id: "food", name: "Food & Drinks", icon: "fast-food" },
    { id: "shopping", name: "Shopping", icon: "cart" },
    { id: "bills", name: "Bills", icon: "receipt" },
    { id: "transportation", name: "Transportation", icon: "car" },
    { id: "entertainment", name: "Entertainment", icon: "film" },
    { id: "income", name: "Income", icon: "cash" },
    { id: "other", name: "Other", icon: "ellipsis-horizontal" },
  ];

  const createTransaction = async () => {
    if (!title.trim()) {
      return Alert.alert("Error", "Please enter a transaction title");
    }
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      return Alert.alert("Error", "Please enter a valid amount");
    }

    if (!category) {
      return Alert.alert("Error", "Please select a category");
    }

    setIsLoading(true);
    try {
      const formattedAmount = isExpense
        ? -Math.abs(parseFloat(amount))
        : Math.abs(parseFloat(amount));

      const response = await fetch(`${API_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          amount: formattedAmount,
          category,
          user_id: user?.id,
        }),
      });

      if (!response.ok) {
        const errorData = response.json();
        console.log(errorData);
        throw new Error("Failed to create transaction");
      }

      Alert.alert("Success", "Transaction created succesfully");
      router.back();
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Transaction failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={26} />
        </Pressable>
        <Text style={styles.titleText}>New Transaction</Text>
        <Pressable onPress={() => createTransaction()}>
          <Ionicons name="checkmark" size={26} />
        </Pressable>
      </View>
      <View style={styles.createTransactionContainer}>
        <View style={styles.typeSelectorContainer}>
          <Pressable
            style={[
              styles.typeSelector,
              isExpense && { backgroundColor: COLORS.primary },
            ]}
            onPress={() => {
              setIsExpense(true);
            }}
          >
            <Ionicons
              name="arrow-down-circle"
              size={22}
              color={isExpense ? COLORS.white : COLORS.expense}
            />
            <Text
              style={[styles.typeText, isExpense && { color: COLORS.white }]}
            >
              Expense
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.typeSelector,
              !isExpense && { backgroundColor: COLORS.primary },
            ]}
            onPress={() => {
              setIsExpense(false);
            }}
          >
            <Ionicons
              name="arrow-up-circle"
              size={22}
              color={!isExpense ? COLORS.white : COLORS.income}
            />
            <Text
              style={[styles.typeText, !isExpense && { color: COLORS.white }]}
            >
              Income
            </Text>
          </Pressable>
        </View>
        <View style={styles.amountContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.currencySymbol}>$</Text>
          </View>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor={COLORS.textLight}
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View style={styles.titleInputConatiner}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="create-outline"
              size={22}
              color={COLORS.textLight}
            />
          </View>
          <TextInput
            style={styles.titleInput}
            placeholder="Transaction Title"
            placeholderTextColor={COLORS.textLight}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.categorySection}>
          <View style={styles.categorySectionTitleContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="pricetag-outline" size={18} />
            </View>
            <Text style={styles.sectionTitle}>Category</Text>
          </View>
          <View style={styles.categoriesWrapper}>
            {CATEGORIES.map((item) => {
              return (
                <Pressable
                  style={[
                    styles.categoryContainer,
                    category === item.name && {
                      backgroundColor: COLORS.primary,
                    },
                  ]}
                  key={item.id}
                  onPress={() => {
                    setCategory(item.name);
                  }}
                >
                  <View>
                    <Ionicons
                      name={item.icon}
                      color={
                        category === item.name ? COLORS.white : COLORS.text
                      }
                    />
                  </View>
                  <Text
                    style={[category === item.name && { color: COLORS.white }]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      {isLoading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </View>
  );
};

export default Create;
