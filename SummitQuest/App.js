import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/main";
import Home from "./app";
export default function App() {
  return (
    <View>
      <StatusBar />
      <Home />
    </View>
  );
}
