import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect signed-in users away from ALL screens in (auth)
  if (isSignedIn) {
    return <Redirect href="../(root)" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
