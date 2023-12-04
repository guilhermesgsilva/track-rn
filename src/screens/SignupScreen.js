import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Signup Screen</Text>
      <Button
        title="Go to Signin Screen"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 48 },
});

export default SignupScreen;
