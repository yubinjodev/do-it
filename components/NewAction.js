import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function NewAction() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter new todo" />
      <TouchableOpacity style={styles.button}>+</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 80,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    color: "rgba(0,0,0,0.2)",
    padding: "1rem",
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "50%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    color: "rgba(0,0,0,0.5)",
    height: "100%",
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: 700,
  },
});
