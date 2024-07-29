import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Surface, Drawer } from "react-native-paper";

const image = {
  uri: "https://images.pexels.com/photos/2899682/pexels-photo-2899682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const groupsList = [
  {
    title: "Group 1",
    members: 3,
    items: 20,
    labelColor: "#e78300",
  },
  {
    title: "Group 2",
    members: 3,
    items: 20,
    labelColor: "#e92727",
  },
  {
    title: "Group 3",
    members: 3,
    items: 20,
    labelColor: "#4e77ff",
  },
  {
    title: "Group 4",
    members: 5,
    items: 20,
    labelColor: "#0027a9",
  },
  {
    title: "Group 5",
    members: 3,
    items: 20,
    labelColor: "#e78300",
  },
  {
    title: "Group 6",
    members: 3,
    items: 20,
    labelColor: "#fde403",
  },
  {
    title: "Group 7",
    members: 3,
    items: 20,
    labelColor: "#ea13e0",
  },
  {
    title: "Group 8",
    members: 5,
    items: 20,
    labelColor: "#156622",
  },
];

const LeftDrawer = ({ visible, onClose }) => {
  const [active, setActive] = React.useState("");

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.drawerContainer}>
          <Drawer.Section title="Some title">
            <Drawer.Item
              label="First Item"
              active={active === "first"}
              onPress={() => setActive("first")}
            />
            <Drawer.Item
              label="Second Item"
              active={active === "second"}
              onPress={() => setActive("second")}
            />
          </Drawer.Section>
          <Button title="Close Drawer" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

function Index() {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Drawer" onPress={toggleDrawer} />
      <LeftDrawer visible={drawerVisible} onClose={toggleDrawer} />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <Surface elevation={5} style={styles.contentSurface}>
          <Text style={styles.title}>Your list Groups</Text>
          <FlatList
            data={groupsList}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <Surface style={styles.listItemSurface}>
                <View>
                  <Text style={styles.listItemTitle}>{item.title}</Text>
                  <Text style={{ fontSize: 14, color: "#888" }}>
                    {item.members} Members
                  </Text>
                </View>
                <Surface
                  style={{
                    padding: 8,
                    borderRadius: 5,
                    backgroundColor: item.labelColor,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{item.items} Items</Text>
                </Surface>
              </Surface>
            )}
          />
        </Surface>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    height: "30%",
    resizeMode: "cover",
  },
  contentSurface: {
    marginTop: "auto",
    height: "80%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontFamily: "Poppins",
    letterSpacing: 1,
    fontWeight: "semibold",
    color: "#e78300",
  },
  listItemSurface: {
    margin: 2,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#990404",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  listItemTitle: {
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Poppins-SemiBold",
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  drawerContainer: {
    backgroundColor: "#fff",
    padding: 16,
    flex: 1,
    width: 300,
  },
});

export default Index;
