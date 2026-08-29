import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const createCreateStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 18,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      marginTop: 15,
    },

    titleText: {
      fontWeight: "bold",
      color: COLORS.text,
      fontSize: 18,
    },

    createTransactionContainer: {
      backgroundColor: COLORS.white,
      borderRadius: 15,
      elevation: 3,
      padding: 18,
      marginTop: 20,
      gap: 15,
    },

    typeSelectorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    typeSelector: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 25,
      paddingVertical: 8,
      paddingHorizontal: 25,
      justifyContent: "space-between",
      gap: 6,
    },

    typeText: {
      fontWeight: "bold",
      color: COLORS.text,
      fontSize: 15,
    },

    amountContainer: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
    },

    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
    },

    currencySymbol: {
      color: COLORS.text,
      fontSize: 32,
      fontWeight: "bold",
    },

    amountInput: {
      fontSize: 32,
      fontWeight: "bold",
      color: COLORS.text,
      width: "100%",
    },

    titleInputConatiner: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: COLORS.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 14,
      gap: 10,
    },

    titleInput: {
      color: COLORS.text,
      fontSize: 14,
      width: "100%",
      fontWeight: "bold",
    },
    categorySection: {},

    categorySectionTitleContainer: {
      flexDirection: "row",
      gap: 8,
    },

    categoriesWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    categoryContainer: {
      flexDirection: "row",
      padding: 10,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 20,
      margin: 5,
      alignItems: "center",
      gap: 8,
      alignSelf: "flex-start",
      paddingHorizontal: 14,
    },

    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: COLORS.text,
      marginBottom: 15,
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return styles;
};

export default createCreateStyles;
