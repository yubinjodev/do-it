import { View, Text, StyleSheet, FlatList } from "react-native";
import ActionItem from "./ActionItem";

const DATA = ["wash dishes", "fetch water", "buy groceries"];

export default function ActionContainer(props) {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {DATA.map((item) => (
        <ActionItem item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },
});
