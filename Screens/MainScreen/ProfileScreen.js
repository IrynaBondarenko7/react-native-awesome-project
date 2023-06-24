import { StyleSheet, View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
