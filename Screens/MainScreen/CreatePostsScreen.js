import { StyleSheet, View, Text } from "react-native";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Create Page</Text>
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
