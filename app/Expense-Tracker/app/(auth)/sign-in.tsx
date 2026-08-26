import { useAuth, useSignIn } from "@clerk/expo";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import createAuthStyles from "@/assets/styles/auth.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

export default function SignInScreen() {
  const { isLoaded } = useAuth();
  const { signIn } = useSignIn();

  const styles = createAuthStyles();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSignIn = async () => {
    // 1. Authenticate using factor-specific password method
    const { error } = await signIn.password({
      identifier: emailAddress,
      password,
    });

    if (error) {
      setErr("Invalid Email/Password");
      return;
    }

    // 2. Finalize and activate the session
    const { error: finalizeError } = await signIn.finalize();
    if (finalizeError) {
      setErr("Sign In Failed");
      return;
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
    >
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/revenue-i4.png")}
        />

        <Text style={styles.title}>Welcome Back</Text>

        {err ? (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
            <Text style={styles.errorText}>{err}</Text>
            <TouchableOpacity onPress={() => setErr("")}>
              <Ionicons name="close" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null}

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email address"
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Enter password (15 characters or more)"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Pressable style={styles.submitButton} onPress={() => handleSignIn()}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <View style={styles.footerContainer}>
          <Text>Don&apos;t have an account?</Text>

          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
