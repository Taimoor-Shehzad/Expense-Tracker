import { useAuth, useSignIn } from "@clerk/expo";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignInScreen() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { signIn } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // 1. Authenticate using factor-specific password method
    const { error } = await signIn.password({
      identifier: emailAddress,
      password,
    });

    if (error) {
      // Handle the error in your app (e.g., invalid credentials)
      return;
    }

    // 2. Finalize and activate the session
    const { error: finalizeError } = await signIn.finalize();
    if (finalizeError) {
      // Handle finalizing error
      return;
    }
  };

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <View style={styles.container}>
        <Text>You&apos;re signed in</Text>
        <Pressable onPress={() => signOut()}>
          <Text>Signout</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={setEmailAddress}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
