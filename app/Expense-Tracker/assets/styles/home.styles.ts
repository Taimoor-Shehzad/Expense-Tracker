// styles/home.styles.js
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const createHomeStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignContent: "center",
    },
    content: {
      flex: 1,
      padding: 20,
      paddingBottom: 0,
      justifyContent: "flex-start",
    },

    header: {
      height: 55,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      marginBottom: 25,
      marginTop: 26,
    },

    logoImg: {
      width: 75,
      height: 75,
      resizeMode: "contain",
    },

    addButton: {
      flexDirection: "row",
      width: 75,
      backgroundColor: COLORS.primary,
      justifyContent: "center",
      alignItems: "center",
      padding: 11,
      borderRadius: 24,
      gap: 4,
      elevation: 3,
    },

    exitButton: {
      backgroundColor: COLORS.white,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      padding: 7,
    },

    headerLeft: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    welcomeText: {
      fontSize: 14,
      color: COLORS.textLight,
      marginBottom: 2,
    },
    usernameText: {
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.text,
    },
    headerRight: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: "bold",
      color: COLORS.text,
    },
    summaryContainer: {
      backgroundColor: COLORS.card,
      borderRadius: 14,
      padding: 16,
      elevation: 3,
    },

    totalBalanceContainer: {
      marginBottom: 10,
    },

    totalText: {
      color: COLORS.textLight,
      fontSize: 20,
    },
    balanceText: {
      color: COLORS.text,
      fontWeight: "bold",
      fontSize: 26,
    },
    incomeExpenseContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 4,
    },

    incomeContainer: {
      width: 100,
    },

    expensesContainer: {
      width: 110,

      borderLeftColor: COLORS.border,
      borderLeftWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    incomeText: {
      paddingLeft: 8,
      textAlign: "center",
      color: COLORS.textLight,
      fontSize: 14,
    },

    incomeNumber: {
      textAlign: "center",
      color: COLORS.income,
      fontWeight: "bold",
      fontSize: 18,
    },

    expenseText: {
      textAlign: "center",
      color: COLORS.textLight,
      paddingLeft: 8,
      fontSize: 14,
    },

    expenseNumber: {
      textAlign: "center",
      color: COLORS.expense,
      fontWeight: "bold",
      fontSize: 18,
    },

    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: COLORS.text,
      marginBottom: 15,
      marginTop: 20,
    },

    itemCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: COLORS.white,
      elevation: 2,
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 12,
      margin: 6,
    },

    itemCardLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    iconContainer: {
      padding: 10,
      backgroundColor: COLORS.background,
      borderRadius: "50%",
    },

    transactionTextContainer: {
      justifyContent: "center",
    },

    transactionTitleText: {
      color: COLORS.text,
      fontWeight: "bold",
      fontSize: 14,
    },
    transactionCategoryText: {
      color: COLORS.textLight,
      fontSize: 14,
    },
    itemCardRight: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    transactionAmountText: {
      justifyContent: "center",
      alignItems: "flex-end",
    },

    transactionAmount: {
      fontWeight: "bold",
      fontSize: 14,
    },

    transactionDate: {
      color: COLORS.textLight,
      fontSize: 12,
    },

    transactionDeleteIconContainer: {
      justifyContent: "center",
      alignContent: "center",
      borderLeftColor: COLORS.border,
      borderLeftWidth: 1,
      padding: 7,
    },

    transactionCard: {
      backgroundColor: COLORS.card,
      borderRadius: 12,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    transactionContent: {
      flex: 1,
      flexDirection: "row",
      padding: 15,
      alignItems: "center",
    },
    categoryIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#F5F5F5",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    transactionLeft: {
      flex: 1,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: "500",
      color: COLORS.text,
      marginBottom: 4,
    },
    transactionCategory: {
      fontSize: 14,
      color: COLORS.textLight,
    },
    transactionRight: {
      alignItems: "flex-end",
    },
    // transactionAmount: {
    //   fontSize: 16,
    //   fontWeight: "600",
    //   marginBottom: 4,
    // },
    // transactionDate: {
    //   fontSize: 12,
    //   color: COLORS.textLight,
    // },
    deleteButton: {
      padding: 15,
      borderLeftWidth: 1,
      borderLeftColor: COLORS.border,
    },
    transactionsContainer: {
      marginBottom: 20,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.background,
    },
    emptyState: {
      backgroundColor: COLORS.card,
      borderRadius: 16,
      padding: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    emptyStateIcon: {
      marginBottom: 16,
    },
    emptyStateTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: COLORS.text,
      marginBottom: 8,
    },
    emptyStateText: {
      color: COLORS.textLight,
      fontSize: 14,
      textAlign: "center",
      marginBottom: 20,
      lineHeight: 20,
    },
    emptyStateButton: {
      backgroundColor: COLORS.primary,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    emptyStateButtonText: {
      color: COLORS.white,
      fontWeight: "600",
      marginLeft: 6,
    },
    transactionsHeaderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      paddingBottom: 5,
    },
    transactionsList: {
      flex: 1,
      minHeight: 200,
    },
    transactionsListContent: {
      flexGrow: 1,
      paddingBottom: 20,
    },
  });

  return styles;
};

export default createHomeStyles;
