import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text></Text>
      <Text style={styles.text}>
        Версия приложения<Text style={styles.versions}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "О приложении",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "regular",
    alignItems: "flex-end",
  },
  versions: {
    fontFamily: "bold",
  },
});
