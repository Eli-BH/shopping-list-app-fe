import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Surface, IconButton, MD3Colors } from "react-native-paper";

const HomeToolbar = () => {
  const colorScheme = useColorScheme();

  return (
    <Surface elevation={5} style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Profile icon pressed")}>
        <Ionicons style={styles.icons} name="person-outline" />
      </TouchableOpacity>
      <IconButton
        icon="plus"
        mode="contained"
        iconColor="#fff"
        containerColor="#FF7F3E"
        rippleColor="#80C4E9"
        size={60}
        onPress={() => console.log("Pressed")}
      />
      <Pressable onPress={() => console.log("Settings icon pressed")}>
        <Ionicons style={styles.icons} name="settings-outline" />
      </Pressable>
    </Surface>
  );
};

export default HomeToolbar;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#FF7F3E",
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: "#fff",
  },
  icons: {
    fontSize: 24,
    color: "#007AFF",
  },
});
