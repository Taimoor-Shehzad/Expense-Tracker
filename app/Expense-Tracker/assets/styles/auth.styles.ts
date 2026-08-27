// styles/auth.styles.js
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const createAuthStyles = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },

    image: {
      width: "90%",
      resizeMode: "contain",
      height: 300,
    },

    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: COLORS.text,
      marginVertical: 15,
    },

    input: {
      width: "100%",
      borderRadius: 12,
      backgroundColor: COLORS.white,
      borderColor: COLORS.border,
      padding: 15,
      color: COLORS.text,
      fontSize: 16,
      borderWidth: 1,
    },

    submitButton: {
      width: "100%",
      padding: 16,
      backgroundColor: COLORS.primary,
      borderRadius: 12,
    },

    errorInput: {
      borderColor: COLORS.expense,
    },

    buttonText: {
      color: COLORS.white,
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    footerText: {
      color: COLORS.text,
      fontSize: 16,
    },
    linkText: {
      color: COLORS.primary,
      fontSize: 16,
      fontWeight: "600",
    },
    verificationContainer: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    verificationTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: COLORS.text,
      marginBottom: 20,
      textAlign: "center",
    },
    verificationInput: {
      backgroundColor: COLORS.white,
      borderRadius: 12,
      padding: 15,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: COLORS.border,
      fontSize: 16,
      color: COLORS.text,
      width: "100%",
      textAlign: "center",
      letterSpacing: 2,
    },

    // 🔴 Error styles
    errorBox: {
      backgroundColor: "#FFE5E5",
      padding: 12,
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: COLORS.expense,
      marginBottom: 16,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    errorText: {
      color: COLORS.text,
      marginLeft: 8,
      flex: 1,
      fontSize: 14,
    },
  });

  return styles;
};

export default createAuthStyles;
