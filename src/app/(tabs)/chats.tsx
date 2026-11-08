import { StyleSheet, Text, View } from "react-native";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Чати</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    color: "#999999",
    fontSize: 14,
    marginTop: 10,
  },
});
