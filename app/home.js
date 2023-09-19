import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ActionContainer from "../components/ActionContainer";
import NewAction from "../components/NewAction";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Task Management",
        }}
      />
      {/* <ScrollView> */}
      <ActionContainer title="Todos" />
      <ActionContainer title="Completed" />
      {/* </ScrollView> */}

      <NewAction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});
