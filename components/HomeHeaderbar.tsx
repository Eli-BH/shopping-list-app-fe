import { StyleSheet, Text, Image, Pressable, View } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeHeaderbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable>
        <MaterialCommunityIcons name="hamburger" size={24} color="#FF7F3E" />
      </Pressable>
      <View style={styles.icon}>
        <Image
          source={require("@/assets/images/FeijoaIcon.png")}
          style={{ width: 70, height: 70 }}
        />
      </View>

      <Pressable>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={24}
          color="#FF7F3E"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeHeaderbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 100,
    backgroundColor: "#fff",
    paddingTop: 15,
    zIndex: 100,
  },
  icon: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 10,
  },
});
