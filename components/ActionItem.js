import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ActionItem(props) {
  const { item } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} />
      <Text>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: "0.5rem",
    paddingVertical: "1rem",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center",
    borderRadius: "0.5rem",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "rgba(85, 188, 246, 0.40)",
    height: "1.25em",
    width: "1.25em",
    borderRadius: 4,
  },
});
