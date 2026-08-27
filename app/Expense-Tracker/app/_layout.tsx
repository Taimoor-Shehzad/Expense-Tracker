import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
          <Slot />
        </ClerkProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// import { useAuth } from "@clerk/expo";
// import { Redirect, Stack } from "expo-router";

// export default function AuthRoutesLayout() {
//   const { isSignedIn } = useAuth();
//   if (isSignedIn) {
//     return <Redirect href="/" />;
//   }
//   return <Stack />;
// }
