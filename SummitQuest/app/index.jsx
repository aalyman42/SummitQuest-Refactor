import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function basicView() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Default view to check outlet functionality</Text>
      <Link href="/journal" asChild>
        <Pressable>
          <Text>Journal</Text>
        </Pressable>
      </Link>
    </View>
  );
}
