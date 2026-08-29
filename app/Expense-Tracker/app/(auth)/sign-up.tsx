import { useAuth, useSignUp } from "@clerk/expo";
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

export default function MainScreen() {
  const { isLoaded } = useAuth();
  const { signUp } = useSignUp();
  const styles = createAuthStyles();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [err, setErr] = useState("");

  const handleSignUp = async () => {
    const { error } = await signUp.password({ emailAddress, password });
    if (error) {
      setErr("Invalid Email/Password");
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) {
      setErr("Verification Failed");
      return;
    }

    setIsVerifying(true);
  };

  const handleVerify = async () => {
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      setErr("Incorrect Verification Code");
      return;
    }

    const { error: finalizeError } = await signUp.finalize();
    if (finalizeError) {
      setErr("An Error Occured Please Try Again");
      return;
    }
  };

  if (!isLoaded) {
    return null;
  }

  if (isVerifying) {
    return (
      <>
        <View style={styles.mainContainer}>
          <Text style={styles.verificationTitle}>Verification</Text>
          <TextInput
            style={styles.verificationInput}
            value={code}
            placeholder="Enter your verification code"
            onChangeText={setCode}
            keyboardType="numeric"
          />
          <Pressable style={styles.submitButton} onPress={() => handleVerify()}>
            <Text style={styles.buttonText}>Verify Email</Text>
          </Pressable>
        </View>
      </>
    );
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
          source={require("@/assets/images/revenue-i2.png")}
        />
        <Text style={styles.title}>Sign up</Text>

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
          style={styles.input}
          value={password}
          placeholder="Enter password (15 characters or more)"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Pressable style={styles.submitButton} onPress={() => handleSignUp()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <View nativeID="clerk-captcha" />
        <View style={styles.footerContainer}>
          <Text>Already have an account?</Text>
          <Link href="/sign-in" asChild>
            <Pressable>
              <Text style={styles.linkText}>Sign in</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
